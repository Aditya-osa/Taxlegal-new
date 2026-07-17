@extends('admin.layout')

@section('title', 'Create Blog')
@section('page-title', 'Create New Blog Post')

@section('content')
<div style="max-width:960px;">
    <div class="card">
        <div class="card-header">
            <h2>New Blog Post</h2>
            <a href="{{ route('admin.blogs.index') }}" class="btn btn-secondary">← Back</a>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('admin.blogs.store') }}" enctype="multipart/form-data">
                @csrf
                @include('admin.blogs._form')
            </form>
        </div>
    </div>
</div>
@endsection
