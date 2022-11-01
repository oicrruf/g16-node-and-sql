--Agregando datos en categorías de HEROES & Villians:

INSERT INTO public.category(name, fandom, product_id)
 VALUES ('DC COMICS', TRUE, 1);
  
INSERT INTO public.category(name, fandom, product_id)
  VALUES ('HARRY POTTER', TRUE, 1);

INSERT INTO public.category(name, fandom, product_id)
  VALUES ('MARVEL', TRUE, 1);

INSERT INTO public.category(name, fandom, product_id)
  VALUES ('STAR WARS', TRUE, 1);
  
INSERT INTO public.category(name, fandom, product_id)
  VALUES ('THE MANDALORIAN', TRUE, 1);

--Agregando datos en categorías de ANIMATION & Cartoons:

INSERT INTO public.category(name, fandom, product_id)
  VALUES ('ANIMATED TV', TRUE, 2);
  
INSERT INTO public.category(name, fandom, product_id)
  VALUES ('ANIME', TRUE, 2);
  
INSERT INTO public.category(name, fandom, product_id)
  VALUES ('CARTOON CLASSICS', TRUE, 2);
  
INSERT INTO public.category(name, fandom, product_id)
  VALUES ('DISNEY', TRUE, 2);
    
INSERT INTO public.category(name, fandom, product_id)
  VALUES ('PIXAR', TRUE, 2);
  
INSERT INTO public.category(name, fandom, product_id)
  VALUES ('POKÉMON', TRUE, 2);

INSERT INTO public.category(name, fandom, product_id)
  VALUES ('VIDEO GAMES', TRUE, 2);

-- Categories para MOVIES & TV (id = 3).
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('ACTION & ADVENTURE', TRUE, 3);
	
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('CLASSICS', TRUE, 3);
	
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('COMEDY', TRUE, 3);
	
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('FAMILY', TRUE, 3);
	
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('HORROR', TRUE, 3);

-- Categories para ICONS & Sports & More (id = 4).
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('AD ICONS', TRUE, 4);

INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('ICONS', TRUE, 4);
	
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('MUSIC', TRUE, 4);
	
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('RETRO TOYS', TRUE, 4);
	
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('SPORTS', TRUE, 4);
	
INSERT INTO public.category(
	name, fandom, product_id)
	VALUES ('FUNKO GEAR', TRUE, 4);

-- No hay categories para Shop by type, ahi se maneja por tipo de producto.
  
SELECT * FROM public.category;

TRUNCATE TABLE category, funko, funko_picture, stock, license_funko RESTART IDENTITY
