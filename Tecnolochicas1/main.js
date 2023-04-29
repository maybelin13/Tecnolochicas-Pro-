let app = document.getElementById('typewriter');
let typewriter = new Typewriter (app,{
loop: true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString(' ""Tal vez cometí un error ayer, pero el yo de ayer sigo siendo yo. Soy quien soy hoy, con todas mis fallas. Mañana podría ser un poco más sabio, y ese soy yo también. Estas fallas y errores son lo que soy". , formando las estrellas más brillantes en la constelación de mi vida. He llegado a amarme por lo que fui, por lo que soy y por lo que espero llegar a ser.  " <br> -BTS')
.pauseFor (200)
.deleteChars (10)
.start();