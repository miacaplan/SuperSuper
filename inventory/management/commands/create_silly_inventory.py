from django.core.management.base import BaseCommand
import silly

from inventory.models import Product, Category


class Command(BaseCommand):
    help = "Create silly inventory items."

    def handle(self, *args, **options):
        # Product.objects.all().delete()

        for i in range(10):
            title = "Category {} {}".format(i + 1, silly.noun())
            desc = silly.paragraph(length=2) + "\n" + silly.paragraph(length=2)
            Category.objects.create(
                title=title,
                description=desc,
                image_url=silly.image(),
            )

        for i in range(100):
            title = "{} {}".format(silly.adjective(), silly.noun())
            desc = silly.paragraph(length=2) + "\n" + silly.paragraph(length=2)
            price = silly.number() + silly.number() / 10
            category = Category.objects.order_by('?').first()
            Product.objects.create(
                title=title,
                description=desc,
                price=price,
                image_url=silly.image(),
                category=category,
            )

        print("OK")

