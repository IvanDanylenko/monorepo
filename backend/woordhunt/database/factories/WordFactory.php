<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class WordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'word' => $this->faker->word(),
            'pinin' => $this->faker->word(),
            'translation' => $this->faker->word(),
            'position' => $this->faker->unique()->randomNumber(2),
        ];
    }
}
