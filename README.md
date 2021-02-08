# Auth Connect demo

This app is about as single purpose as you can get. It shows:
- login
- logout
- refresh

If you hit the refresh button enough times it may blow chunks, but that may just be Azure not liking so many refreshes. It is not really worth tracking down, honestly, because you should not refresh that often.

The point here, though, is to show a configuration that can work with Ionic v3 and the fact that it did not use the standard Angular router and that it used the old fashioned "hash routes", which can be problematic because Azure is going to return the tokens via a hash route as well, so two hashes in a route would be a problem.

The main thing to note here is the setup in the AuthProvider service, so go have a look at that (it is really the only thing in the service).

To run this app:

- clone
- cd
- npm i 
- npm start

Make sure you are running on port 8100

- Username: test@ionic.io
- Password: Ion54321
