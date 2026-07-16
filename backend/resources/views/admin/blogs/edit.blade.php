@extends('admin.layout')

@section('title', 'Edit Blog')
@section('page-title', 'Edit Blog Post')

@section('content')
<div style="max-width:960px;">
    <div class="card">
        <div class="card-header">
            <h2>Edit — {{ $blog->title }}</h2>
            <a href="{{ route('admin.blogs.index') }}" class="btn btn-secondary">← Back</a>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('admin.blogs.update', $blog) }}" enctype="multipart/form-data">
                @csrf @method('PUT')
                @include('admin.blogs._form', ['blog' => $blog])
            </form>
        </div>
    </div>
</div>
@endsection
