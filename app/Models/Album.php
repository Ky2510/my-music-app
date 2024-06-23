<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Album extends Model
{
    use HasFactory;

    protected $table = 'albums';
    protected $fillable = [
        'name', 'release','image'
    ];

    /**
     * Get all of the music for the Album
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function music(): HasMany
    {
        return $this->hasMany(Music::class, 'albumId', 'id');
    }
}
