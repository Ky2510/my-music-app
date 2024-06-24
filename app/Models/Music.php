<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Music extends Model
{
    use HasFactory;

    protected $table = 'music';
    protected $fillable = [
        'genreId', 'albumId', 'title', 'release', 'linkUrl'
    ];

    /**
     * Get the genre that owns the Music
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function genre(): BelongsTo
    {
        return $this->belongsTo(Genre::class, 'genreId', 'id');
    }

    /**
     * Get the album that owns the Music
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function album(): BelongsTo
    {
        return $this->belongsTo(Album::class, 'albumId', 'id');
    }

    /**
     * Get all of the choiceMusic for the Music
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function choiceMusic(): HasMany
    {
        return $this->hasMany(ChoiceMusic::class, 'musicId', 'id');
    }
}
