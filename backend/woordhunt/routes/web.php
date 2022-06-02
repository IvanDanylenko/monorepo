<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/page/view/ex', function () {
    return inertia('Exercises');
});

Route::get('/edu/ex/1', function () {
    return inertia('Exercises/RememberAll');
});

Route::get('/edu/ex/2', function () {
    return inertia('Exercises/WordsList');
});

Route::get('/edu/ex/3', function () {
    return inertia('Exercises/Biathlon');
});

Route::get('/page/view/extensions', function () {
    return inertia('Extensions');
});

Route::get('/tester/list', function () {
    return inertia('Extensions/Tester/List');
});

Route::get('/tester/known', function () {
    return inertia('Extensions/Tester/Known');
});

Route::get('/tester/unknown', function () {
    return inertia('Extensions/Tester/Unknown');
});

Route::get('/tester/clear', function () {
    return inertia('Extensions/Tester/Clear');
});

Route::get('/user/preentry', function () {
    return inertia('User/Preentry');
});

Route::get('/user/registration', function () {
    return inertia('User/Registration');
});

Route::get('/user/login', function () {
    return inertia('User/Login');
});

Route::get('/user/forgotpass', function () {
    return inertia('User/ForgotPassword');
});

Route::get('/user/wordinprogress', function () {
    return inertia('User/WordInProgress');
});

Route::get('/user/worddone', function () {
    return inertia('User/WordDone');
});

Route::get('/user/setmaillenta', function () {
    return inertia('User/SetMainLenta');
});

Route::get('/user/profile', function () {
    return inertia('User/Profile');
});

Route::get('/user/changepass', function () {
    return inertia('User/ChangePassword');
});

Route::get('/user/settings', function () {
    return inertia('User/Settings');
});

Route::get('/user/personalexamples', function () {
    return inertia('User/PersonalExamples');
});

Route::get('/user/prelogout', function () {
    return inertia('User/Prelogout');
});
