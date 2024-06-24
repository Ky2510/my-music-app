<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Genre extends Model
{
    use HasFactory;

    protected $table = 'genres';
    protected $fillable = [
        'name'
    ];

    /**
     * Get all of the Music for the Genre
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function Music(): HasMany
    {
        return $this->hasMany(Music::class, 'genreId', 'id');
    }
}
