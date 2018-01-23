@extends('_layouts.master')

@section('body')
<div class="container">
  <div class="row">
    <div class="col-md-8 article-meta">
      <p><a href="{{ $page->baseUrl }}"><i class="fa fa-arrow-left"></i> Go back</a></p>
      <span class="article-date">{{ date('F j, Y', $page->date) }}</span>
      <h1>{{ $page->title }}</h1>
      <h2>{{ $page->subtitle }}</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8 col-md-offset-2 article-text">
      @yield('content')
    </div>
  </div>
  <div class="row">
    <div class="col-md-8 col-md-offset-2 article-footnotes">
      <hr>
      @if ($page->footnotes)
      <a name="fn"></a>
      <ol>
        @foreach ($page->footnotes as $k => $footnote)
        <li>{{ $footnote }}</li>
        @endforeach
  </ol>
  @endif
  <span class="article-modified">last built: {{ date('Y-m-d H:i:s') }} &mdash; <a href="{{ $page->githubUrl }}/{{ $page->getFilename() }}.blade.md">check source code</a></span>
    </div>
  </div>
</div>
@endsection
