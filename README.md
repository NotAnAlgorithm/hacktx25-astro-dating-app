# Cosmic Connection
We aim to create a community that provides a safe space for individuals to explore themselves and connect with like-minded people.

Cosmic Connection  is a mobile dating website that utilizes horoscopes and other compatibility factors to match users! Users can reveal matches with the interactive flip of a card and even chat with matches. 

Future features will include: AI matches, AR integration to simulate a stellarium, and a location map for matches.

## Asset Credits
Tarot Card Images: https://jcanabal.itch.io/major-arcana-pixel-art-free

Background GIF: https://stardust-specks.tumblr.com/post/164063487759/moonrise-inspired-by-the-lovely-artwork-of-8pxl


# Cloning/Developing

After cloning the repository, you need to set up 3 different servers: front end, back end, and PostgreSQL database.

## Front End

```sh
cd frontend
npm install

# unoptimized developer build
npm start

# opimized production build
npm run build
sudo npm install -g serve
serve -s build
```

## Back End

```sh
cd backend
python -m venv venv
source venv/bin/activate
pip install -r python-packages.txt
python manage.py runserver
```

## SQL

> idk halp

## Results!

Open in the web browser `http://localhost:3000`!

