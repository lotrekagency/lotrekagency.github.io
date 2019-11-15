
# Piuma

Piuma is our simple and fast image optimizer server you can host on your machine. [Here you can browse our organization](https://github.com/piumaio/)

## Check out the code

- [Piuma](https://github.com/piumaio/piuma)

## Install

    go get github.com/lotrekagency/piuma

## Requirements

Since this project automates two applications, you will need them to be installed on your machine for us to be able to reach them:

- [pngquant](https://pngquant.org/)
- [jpegoptim](https://github.com/tjko/jpegoptim)

## Run

    piuma

You can also change the default `port` and `mediapath`, type

    piuma --help

for more info.

## Usage

    https://yourpiumahost/Options/Image_URL

Where options are values separated by `_`

    width_height_quality

Where `quality` is a value between 0 and 100.

To get your image resized to 100 x 100:

    https://yourpiumahost/100_100/Image URL

If you want to specify only the `width`, you'll get a new image keeping the ratio:

    https://yourpiumahost/100/Image URL

If you want to specify only the `height`

    https://yourpiumahost/0_100/Image URL

## Running tests
To run the unit tests, change to the directory with tests (files ending with ```_test.go``` contain unit tests) and run:

    go test -v ./...

## PyPiuma

Official Python library for Piuma with Django support!

- [PyPiuma](https://github.com/piumaio/pypiuma)

Install it using pip

    pip install pypiuma

For Django add `pypiuma` to your `INSTALLED_APPS` and you can use the template tags to optimize your images on the fly

    {% load pypiuma_tags %}

    <img src="{% piuma '/static/mainlogo.png' width=200 quality=80 %}">

## Vue Piuma

Official Vue component for Piuma Image optimizer, check out the code

- [VuePiuma](https://github.com/piumaio/vue-piuma)

And follow the README to start using it!
