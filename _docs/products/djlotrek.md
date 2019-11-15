# DjLotrek

DjLotrek is our internal Django library. There's no party without DjLotrek!

## Check out the code

- [DjLotrek](https://github.com/lotrekagency/djlotrek)

## Install

Install DjLotrek

     pip install djlotrek

## Settings

Remember to add djlotrek in your project

    INSTALLED_APPS = [
        ...
        'djlotrek',
        ...
    ]

## Modules

DjLotrek is a simple Django app made of the following modules

### Middlewares to deal with cache

To deal with cache you can find CacheAdminMiddleware and CacheHeaderMiddleware, they can disable cache when you're logged in as a superuser or you pass a specific header to your http request

### Template tags and filters

You can find a collection of custom template tags and filters

    {% load djlotrek_filters %}
    {% load djlotrek_tags %}

    {% if request.resolver_match.view_name|is_in:'brands,product' %}
        <div class="padding xs">
            Copyright {% auto_update_year_range 2017 %}
        </div>
    {% endif %}

### AES module

The AES module allows you to deal easily with AES encription and decription. In your settings.py define your AES_ENCRIPTION_KEY

    AES_ENCRIPTION_KEY = 'my encription key'

and then use it:

    from djlotrek import aes

    enc_email = aes.encode(email)
    email = aes.decode(email)

### Mail module

The mail module contains a new version of Django send_mail. With this version you can specify a context and a template for the html and text message

    from djlotrek import send_mail

    context = {
        'name' : 'Andrea',
        'twitter' : '@4stagi'
    }

    template_html = 'mail/profile.html'
    template_txt = 'mail/profile.txt'

    send_mail(
        settings.EMAIL_HOST_USER, ['info@lotrek.it'],
        'Conferma registrazione', context,
        template_html, template_txt
    )

### Rosetta utils

Rosetta has some problem working on a real server, we added an utility to make it working in our projects, remember to import it in your project if you want to use Rosetta in production, for example in views.py:

    from djlotrek.rosetta_utils import *


### Requests utils

In the request_utils.py module you can find some utilities to deal with requests, like get_host_url to get the current host url (http://localhost)
