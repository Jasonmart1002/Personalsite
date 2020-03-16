import React from 'react';
import '../styles/projectCards.css';

function ProjectCards() {
  return (
    <div class="card-deck text-center projcards">
        <div class="card projcards">
            <img src="https://i.imgur.com/B3D2Tjv.png" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">First Project</h5>
            <p class="card-text">TicTacToe game using react.JS</p>
            </div>
        </div>
        <div class="card projcards">
            <img src="https://i.imgur.com/ofunzFT.png" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Second Project</h5>
            <p class="card-text">Todo List Fetching from an insomnia api</p>
            </div>
        </div>
        <div class="card projcards">
            <img src="https://via.placeholder.com/450" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Third Project</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
        </div>
        <div class="card projcards">
            <img src="https://via.placeholder.com/450" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Fourth Project</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
        </div>
    </div>
  );
}

export default ProjectCards;
