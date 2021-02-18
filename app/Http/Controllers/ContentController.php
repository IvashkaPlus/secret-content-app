<?php

namespace App\Http\Controllers;

use App\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ContentController extends Controller
{
    public function index(string $link){
        return view('content');
    }

    public function encrypt_content(Request $request){
        $data = $request->all();

        $data['password'] = Hash::make($data['password']);
        $data['content'] = encrypt($data['content']);

        do{
            $link = $this->generate_link();
            $content = Content::where('link', $request->input('link'))->first();
        } while ((!is_null($content)));

        if($content) {
            return response()->json('', 201);
        } else {
            $data['link'] = $link;
            Content::create($data);
            return response()->json($data['link'], 201);
        }
    }

    public function decrypt_content(Request $request){
        $content = Content::where('link', $request->input('link'))->first();

        if(Hash::check($request['password'], $content->password)){
            $decrypted_data = decrypt($content->content);
            return response()->json($decrypted_data, 201);
        } else {
            return response()->json('Incorrect password', 403);
        }
    }

    public function delete_content(Request $request){
        $content = Content::where('link', $request->input('link'))->first();
        if($content){
            if(Hash::check($request['password'], $content->password)){
                $content->delete();
                return response()->json('Content deleted. You can close this page', 202);
            } else {
                return response()->json('Incorrect password', 403);
            }
        } else {
            return response()->json('Was deleted', 410);
        }
    }

    private function generate_link($strength = 6) {
        $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $input_length = strlen($permitted_chars);
        $random_string = '';
        for($i = 0; $i < $strength; $i++) {
            $random_character = $permitted_chars[mt_rand(0, $input_length - 1)];
            $random_string .= $random_character;
        }

        return $random_string;
    }

}
