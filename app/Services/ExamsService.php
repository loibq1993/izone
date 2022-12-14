<?php
namespace App\Services;

use App\Models\Exams;

class ExamsService
{
    public function getAll(){
        return Exams::all();
    }
    public function store($data){
        return Exams::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'start_date' => $data['start_date'],
            'end_date' => $data['end_date'],
            'count_down' => $data['count_down'],
            'minimum_score' => $data['minimum_score']
        ]);
    }
    public function update($data,$exam){
        return $exam->update([
            'title' => $data['title'],
            'description' => $data['description'],
            'start_date' => $data['start_date'],
            'end_date' => $data['end_date'],
            'count_down' => $data['count_down'],
            'minimum_score' => $data['minimum_score']
        ]);
    }
    public function destroy($exam){
        return $exam->delete();
    }
    public function getOne($id){
        return Exams::find($id);
    }
}
