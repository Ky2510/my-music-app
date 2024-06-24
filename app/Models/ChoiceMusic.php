<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ChoiceMusic extends Model
{
    use HasFactory;

    protected $table = "choice_music";
    protected $fillable = [
        'artistId', 'musicId'
    ];
    

    /**
     * Get the music that owns the ChoiceMusic
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function music(): BelongsTo
    {
        return $this->belongsTo(Music::class, 'musicId', 'id');
    }

    /**
     * Get the artist that owns the ChoiceMusic
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class, 'artistId', 'id');
    }
}