const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.slide');
const itemWidth = items[0].offsetWidth;
let index = 0;

function loadImages() {
  let images = document.querySelectorAll('.slide img');
  let loadedImages = 0;

  images.forEach((image) => {
    image.onload = () => {
      loadedImages++;
      image.classList.add('loaded');
      if (loadedImages === images.length) {
        setInterval(moveCarousel, 2000);
      }
    };
    image.src = image.src;
  });
}

function moveCarousel() {
  index++;
  slider.style.transition = "transform 0.3s ease-in-out";
  slider.style.transform = `translateX(-${index * itemWidth}px)`;

  if (index === items.length - 6) {
    setTimeout(() => {
      slider.style.transition = "none";
      for (let i = 0; i < index; i++) {
        slider.appendChild(slider.firstElementChild);
      }
      index = 0;
      slider.style.transform = `translateX(-${index * itemWidth}px)`;
    }, 300);
  }
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = items.length - 6;
  }
  slider.style.transition = "transform 0.3s ease-in-out";
  slider.style.transform = `translateX(-${index * itemWidth}px)`;
}

function nextSlide() {
  index++;
  if (index === items.length - 4) {
    index = 0;
  }
  slider.style.transition = "transform 0.3s ease-in-out";
  slider.style.transform = `translateX(-${index * itemWidth}px)`;
}

loadImages();


document.querySelector('.nav-left').addEventListener('click', prevSlide);
document.querySelector('.nav-right').addEventListener('click', nextSlide);



//sujerencias 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB (Asegúrate de tener MongoDB funcionando o usar MongoDB Atlas)
mongoose.connect('mongodb://localhost:27017/pinky_mp3', { useNewUrlParser: true, useUnifiedTopology: true });

// Esquema para los comentarios
const commentSchema = new mongoose.Schema({
  author: String,
  date: String,
  text: String,
  likes: [String],
  responses: [String]
});

const Comment = mongoose.model('Comment', commentSchema);

// Ruta para obtener los comentarios
app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los comentarios' });
  }
});

// Ruta para guardar un comentario
app.post('/comments', async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar el comentario' });
  }
});

// Iniciar el servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});
