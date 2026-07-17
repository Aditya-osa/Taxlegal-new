<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title'           => ['required', 'string', 'max:255'],
            'slug'            => ['nullable', 'string', 'max:255', 'unique:blogs,slug'],
            'excerpt'         => ['nullable', 'string', 'max:500'],
            'content'         => ['required', 'string'],
            'image'           => ['nullable', 'image', 'mimes:jpeg,jpg,png,webp', 'max:2048'],
            'status'          => ['required', 'in:draft,published'],
            'published_at'    => ['nullable', 'date'],
            'seo_title'       => ['nullable', 'string', 'max:255'],
            'seo_description' => ['nullable', 'string'],
            'seo_keywords'    => ['nullable', 'string', 'max:255'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required'   => 'The blog title is required.',
            'slug.unique'      => 'This blog slug is already taken. Please choose a different slug.',
            'content.required' => 'The blog content is required.',
            'image.image'      => 'The uploaded file must be a valid image.',
            'image.mimes'      => 'The blog image must be a file of type: jpeg, jpg, png, webp.',
            'image.max'        => 'The blog image size must not exceed 2MB.',
            'status.required'  => 'The blog status is required.',
            'status.in'        => 'The selected blog status must be either draft or published.',
        ];
    }
}
