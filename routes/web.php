<?php

use App\Http\Controllers\SendMailController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;

Route::get('/', [PagesController::class, 'index'])->name('home');
Route::get('/product', [PagesController::class, 'product'])->name('product');
Route::get('/resources', [PagesController::class, 'resources'])->name('resources');
Route::get('/terms-condition', [PagesController::class, 'termsCondition'])->name('terms-condition');
Route::get('/privacy-policy', [PagesController::class, 'privacyPolicy'])->name('privacy-policy');

Route::post('/send-mail', [SendMailController::class, 'sendMail'])->name('send.mail');

