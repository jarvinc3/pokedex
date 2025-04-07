export interface SpriteBasic {
   front_default: string | null;
   front_female?: string | null;
   front_shiny?: string | null;
   front_shiny_female?: string | null;
}

export interface SpriteBackFront extends SpriteBasic {
   back_default?: string | null;
   back_female?: string | null;
   back_shiny?: string | null;
   back_shiny_female?: string | null;
}

export interface Sprites {
   back_default: string | null;
   back_female: string | null;
   back_shiny: string | null;
   back_shiny_female: string | null;
   front_default: string | null;
   front_female: string | null;
   front_shiny: string | null;
   front_shiny_female: string | null;
   other: {
      dream_world: SpriteBasic;
      home: SpriteBasic;
      "official-artwork": {
         front_default: string | null;
         front_shiny: string | null;
      };
      showdown: SpriteBackFront;
   };
   versions: {
      "generation-i": {
         "red-blue": {
            back_default: string | null;
            back_gray: string | null;
            back_transparent: string | null;
            front_default: string | null;
            front_gray: string | null;
            front_transparent: string | null;
         };
         yellow: {
            back_default: string | null;
            back_gray: string | null;
            back_transparent: string | null;
            front_default: string | null;
            front_gray: string | null;
            front_transparent: string | null;
         };
      };
      "generation-ii": {
         crystal: {
            back_default: string | null;
            back_shiny: string | null;
            back_shiny_transparent: string | null;
            back_transparent: string | null;
            front_default: string | null;
            front_shiny: string | null;
            front_shiny_transparent: string | null;
            front_transparent: string | null;
         };
         gold: {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
            front_transparent: string | null;
         };
         silver: {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
            front_transparent: string | null;
         };
      };
      "generation-iii": {
         emerald: {
            front_default: string | null;
            front_shiny: string | null;
         };
         "firered-leafgreen": SpriteBackFront;
         "ruby-sapphire": SpriteBackFront;
      };
      "generation-iv": {
         "diamond-pearl": SpriteBackFront;
         "heartgold-soulsilver": SpriteBackFront;
         platinum: SpriteBackFront;
      };
      "generation-v": {
         "black-white": SpriteBackFront & {
            animated: SpriteBackFront;
         };
      };
      "generation-vi": {
         "omegaruby-alphasapphire": SpriteBasic;
         "x-y": SpriteBasic;
      };
      "generation-vii": {
         icons: SpriteBasic;
         "ultra-sun-ultra-moon": SpriteBasic;
      };
      "generation-viii": {
         icons: SpriteBasic;
      };
   };
}
