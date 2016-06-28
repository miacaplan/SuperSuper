import random
from django.core.management.base import BaseCommand
import silly

from inventory.models import Product, Category


class Command(BaseCommand):
    help = "Create silly inventory items."

    def handle(self, *args, **options):
        # Product.objects.all().delete()
        cats = [
            Category.objects.create(
                title="{} {}".format(silly.adjective(), silly.noun().title()),
                description=silly.paragraph(length=2) + "\n" + silly.paragraph(
                    length=2),
                image_url=silly.image(),
            ) for i in range(8)]

        for i in range(100):
            title = "{} {}".format(silly.adjective(), silly.noun())
            desc = silly.paragraph(length=2) + "\n" + silly.paragraph(length=2)
            price = silly.number() + silly.number() / 10
            Product.objects.create(
                category=random.choice(cats),
                title=title,
                description=desc,
                price=price,
                image_url=silly.image()
            )

        print("OK")
