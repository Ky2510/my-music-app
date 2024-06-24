<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Artist extends Model
{
    use HasFactory;

    protected $table = 'artists';
    protected $fillable = ['name'];

    /**
     * Get all of the choiceMusic for the artist
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function choiceMusic(): HasMany
    {
        return $this->hasMany(ChoiceMusic::class, 'artistId', 'id');
    }
}
