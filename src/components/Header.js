import React, { Component } from "react";

export default class Search extends Component {

    constructor() {
        super();
    }

    render() {
        return (<div className="middle">
            <select className="select-movie">
                <option value="MY_LIST">Minha Lista</option>
                <option value="BEST_PICTURE">Melhor Filme</option>
                <option value="ACTOR_IN_A_LEADING_ROLE">Melhor Ator</option>
                <option value="ACTRESS_IN_A_LEADING_ROLE">Melhor Atriz</option>
                <option value="ACTOR_IN_A_SUPPORTING_ROLE">Melhor Ator Coadjuvante</option>
                <option value="ACTRESS_IN_A_SUPPORTING_ROLE">Melhor Atriz Coadjuvante</option>
                <option value="ANIMATED_FEATURE_FILM">Melhor Animação</option>
                <option value="CINEMATOGRAPHY">Melhor Fotografia</option>
                <option value="COSTUME_DESIGN">Melhor Figurino</option>
                <option value="DIRECTING">Melhor Direção</option>
                <option value="DOCUMENTARY_FEATURE">Melhor Documentário (longa)</option>
                <option value="DOCUMENTARY_SHORT_SUBJECT">Melhor Documentário (curta)</option>
                <option value="FILM_EDITING">Melhor Edição</option>
                <option value="FOREIGN_LANGUAGE_FILM">Melhor Filme Estrangeiro</option>
                <option value="MAKEUP_AND_HAIRSTYLING">Melhor Maquiagem/Penteado</option>
                <option value="MUSIC_ORIGINAL_SCORE">Melhor Trilha Sonora</option>
                <option value="MUSIC_ORIGINAL_SONG">Melhor Canção</option>
                <option value="PRODUCTION_DESIGN">Melhor Direção de Arte</option>
                <option value="SHORT_FILM_ANIMATED">Melhor Curta em Animação</option>
                <option value="SHORT_FILM_LIVE_ACTION">Melhor Curta</option>
                <option value="SOUND_EDITING">Melhor Edição de Som</option>
                <option value="SOUND_MIXING">Melhor Mixagem de Som</option>
                <option value="VISUAL_EFFECTS">Melhores Efeitos Especiais</option>
                <option value="WRITING_ADAPTED_SCREENPLAY">Melhor Roteiro Adaptado</option>
                <option value="WRITING_ORIGINAL_SCREENPLAY">Melhor Roteiro Original</option>
            </select>
            <input className="name-indicated" type="text" />
        </div>);
    }
}