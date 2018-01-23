<?php

return [
    'baseUrl' => 'http://localhost:3000',
    'githubUrl' => 'https://github.com/johannesberdin/website/tree/master/source/_posts',
    'production' => false,
    'collections' => [
      'posts' => [
            'path' => '{date|Y-m-d}/{filename}'
        ],
    ],
];
