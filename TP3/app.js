new Vue({
    el: '#app',
    data: {
        saludJugador: 100,
        saludMonstruo: 100,
        hayUnaPartidaEnJuego: false,
        turnos: [], //es para registrar los eventos de la partida
        esJugador: false,
        rangoAtaque: [3, 10],
        rangoAtaqueEspecial: [10, 20],
        rangoAtaqueDelMonstruo: [5, 12],
    },

    methods: {
        getSalud(salud) {
            return `${salud}%`
        },
        empezarPartida: function () {
            this.hayUnaPartidaEnJuego = true;
            this.saludMonstruo = 100;
            this.saludJugador = 100;
            this.turnos = []
        },
        atacar: function () {
            var danio = this.calcularHeridas(this.rangoAtaque);
            this.saludMonstruo -= danio;

            this.registrarEvento(true,'El jugador golpea al monstruo por ' + danio);

            if(this.verificarGanador()){
                return;
            }

            this.ataqueDelMonstruo();
        },

        ataqueEspecial: function () {
            var danio = this.calcularHeridas(this.rangoAtaqueEspecial);
            this.saludMonstruo -= danio;

            this.registrarEvento(true,'El jugador realiza ataque especial al monstruo por ' + danio);

            if(this.verificarGanador()){
                return;
            }
            this.ataqueDelMonstruo();
        },

        curar: function () {
            if(this.saludJugador <= 90){
                this.saludJugador +=10;
            } else {
                this.saludJugador = 100;
            }

            this.ataqueDelMonstruo();
        },

        registrarEvento(esJugador, text) {
            
            this.turnos.unshift({
                esJugador: esJugador,
                text: text
            });
            
        },
        terminarPartida: function () {
            this.registrarEvento(false, 'Te rendiste! Jugar de nuevo?')
            this.hayUnaPartidaEnJuego = false;
        },

        ataqueDelMonstruo: function () {
            var danio = this.calcularHeridas(this.rangoAtaqueDelMonstruo);
            this.saludJugador -= danio;

            this.registrarEvento(false,'El monstruo lastima al jugador por ' + danio);


            this.verificarGanador();
        },

        calcularHeridas: function (rango) {
            return Math.max(Math.floor(Math.random() * rango[1]) + 1, rango[0] );

        },
        verificarGanador: function () {
            if(this.saludMonstruo <= 0){
                if(this.registrarEvento(true, 'Ganaste! Jugar de nuevo?')){
                    this.empezarPartida();
                }else{
                    this.hayUnaPartidaEnJuego = false;
                }
                return true;
            }else if( this.saludJugador <= 0){
                if(this.registrarEvento(false, 'Perdiste! Jugar de nuevo?')){
                    this.empezarPartida();
                }else{
                    this.hayUnaPartidaEnJuego = false;
                }
                return true;
            }
            return false;
        },
        cssEvento(turno) {
            //Este return de un objeto es prque vue asi lo requiere, pero ponerlo acá queda mucho mas entendible en el codigo HTML.
            return {
                'player-turno': turno.esJugador,
                'monster-turno': !turno.esJugador
            }
        }
    }
});