from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, HttpResponseRedirect

def main(request):
    return render(request, 'EatBook/main.html', {})

def main_search(request):
    if 'query' in request.GET:
        query = request.GET['query']
        return render(request, 'EatBook/search_books.html', {'query': query})

    return render(request, 'EatBook/main.html', {})
    # query = request.GET.get('query', None)
    #
    # if query is not None:
    #     return HttpResponse("넘어온 데이터 : "+query)
        # return HttpResponseRedirect('search_books', {'query':query})


def search_books(request):
    if 'query' in request.GET:
        query = request.GET['query']
        return render(request, 'EatBook/search_books.html', {'query': query})

    return render(request, 'EatBook/search_books.html', {})

def library(request):
    return render(request, 'EatBook/library.html', {})

def login(request):
    if request.method == "POST":
        username=request.POST["username"]
        password=request.POST["password"]
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('main')
        else:
            return render(request, 'EatBook/login.html', {'error': '아이디나 패스워드가 맞지 않습니다'})
    else:
        return render(request, 'EatBook/login.html')

def signup(request):
    if request.method == "POST":
        if request.POST['password1'] == request.POST['password2']:
            user = User.objects.create_user(
                username=request.POST["username"],
                password=request.POST["password1"]
            )
            auth.login(request, user)
            return redirect('index')
        return render(request, "EatBook/signup.html")
    return render(request, 'EatBook/signup.html')
