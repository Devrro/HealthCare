from rest_framework.pagination import PageNumberPagination


class StandartResultPagination(PageNumberPagination):
    page_size = 5
    max_page_size = 50
    page_size_query_param = "page_size"