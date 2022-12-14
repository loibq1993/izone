<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuestionRequest;
use App\Services\QuestionsService;
use Illuminate\Http\Request;
use App\Services\FullAnswerService;
use App\Services\QuestionTypesService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Termwind\Question;

class QuestionsController extends Controller
{
    protected QuestionTypesService $questionsTypesService;
    protected QuestionsService $questionsService;
    protected FullAnswerService $fullAnswerService;

    public function __construct(
        QuestionsService     $questionsService,
        QuestionTypesService $questionsTypesService,
        FullAnswerService    $fullAnswerService
    )
    {
        $this->questionsService = $questionsService;
        $this->questionsTypesService = $questionsTypesService;
        $this->fullAnswerService = $fullAnswerService;
    }

    public function index($examId)
    {
        $questions = $this->questionsService->getAllWithExamId($examId);

        return response()->json([
            'questions' => $questions
        ], 200);
    }

    public function store($examId, Request $request)
    {
        $questionType = $request['questionType'][0];
        $request['exam_id'] = $examId;
        $function = '';
        switch ($questionType) {
            case 1:
                $function = 'storeFillTheBlank';
                break;
            default:
        }
        return $this->$function($request);
    }

    public function storeFillTheBlank(Request $request): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();

        try {
            $count = 0;
            $answerData = [];
            while (!is_null($request['answer[selectField][' . $count . ']'])) {
                $answerData[$count]['answer_type'] = $request['answer[selectField][' . $count . ']'];
                $answerData[$count]['full_text_answer'] = $request['answer[value][' . $count . ']'];
                $answerData[$count]['limit_text'] = $request['answer[limitText][' . $count . ']'];
                $answerData[$count]['explanation'] = $request['answer[explanation][' . $count . ']'];
                ++$count;
            }
            $questionData = [
                'title' => $request['title'][0],
                'type' => $request['questionType'][0],
                'question' => $request['question'],
                'required' => $request['required'],
                'exam_id' => $request['exam_id']
            ];

            $validate = array_merge($questionData, $answerData);
            $messages = [
                '*.answer_type.*.required' => 'Answer type is required',
                "*.full_text_answer.*.required" => "Answer is required",
                "*.limit_text.*.integer" => "Limit number text must be integer",
            ];
            $validator = Validator::make($validate, [
                "title" => "required|string",
                "question" => "required|string",
                "type" => "required",
                "*.answer_type.*" => "required",
                "*.full_text_answer.*" => "required",
                "*.limit_text.*" => "integer|nullable",
                "exam_id" => "required|integer"
            ], $messages);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Bad request',
                    'errors' => $validator->errors()->toArray()
                ], 400);
            }

            $question = $this->questionsService->store($questionData);

            //create exam_question record
            $this->questionsService->createExamQuestion([
                'exam_id' => $request['exam_id'],
                'question_id' => $question->id
            ]);

            foreach ($answerData as $data) {
                $this->fullAnswerService->storeFillTheBlank($question->id, $data);
            }
            DB::commit();

            return response()->json([
                'examId' => $request['exam_id']
            ], 201);
        } catch (\Exception $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    public function getType()
    {
        $type = $this->questionsTypesService->getAll()->toArray();

        return response()->json([
            'type' => $type
        ], 200);
    }

    public function show($examId, $id)
    {
        $question = $this->questionsService->getOne($id);
;
        return response()->json([
            'question' => $question
        ], 200);
    }
}
