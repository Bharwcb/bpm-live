#BeatsPerMash Live

##Description:
BPM Live is a 6-day capstone project which allows up to 10 friends/musicians to collaborate and play music together in real-time. 

##Technology Used:
- Back End: 
  - Rails
  - ActiveRecord
  - PostgreSQL
- Front End
  - JavaScript
  - JQuery
- Plugins & Gems:
  - js.cookie (client-side cookies to save tracks pre-login or signup)
  - jquery-ui/effect-shake
  - devise
  - jquery_ujs
  - redis (rails action cable websockets)

##User Stories:
- Main Page
  - Given I open the website
  - When I am on the homepage
  - Then I should be able to begin playing
- Registered User
  - Given I am a registered user
  - When I am on the homepage
  - Then I should be able to save my sounds or create a room to play privately with up to 10 friends
- User profile
  - Given I am a logged in user
  - When I am on my profile
  - I should be able to play my saved sounds

##Challenges Faced:
Considering the user experience of recording for an hour or more, then seeing one must login to save tracks, it was important to build out functionality to save tracks for guest users using client-side cookies. A challenge was accomodating for as many user stories as possible (user records for an hour, signs up, then wants to keep recording.. or user records, signus up, then wants to save the track immediately, etc.) Each scenario required a different interaction with the track saving functions (see save.js & musicFunctions.js) of which I was working with.

Another challenge was determining and evolving the MVP to suite our needs.  Originally, saving was not in the MVP. But after implementing redis the need for a user experience to record and save tracks surfaced, as well as the need for multiple users to save the same track. This changed our database significantly and drained time on such a short-term project, but we developed a plan to fork off work to deliver on time delegate teammembers on either 1) UX for recording and saving tracks, back-end/database optimization 2) Track playing functionality such as looping, stopping, UI shake effects, etc. and 3) web sockets.

For the majority of the project, I owned the music recording and saving functionality, designing and coding the member and guest UX, how best to convert to signups (including client-side cookies), etc., database storage & optimization, and MVC design.  I faced most of my hurdles in AJAX with determining how best to transfer sound data to and from the database while preserving the user experience. Working with Javascript constructors was new but extremely exciting to use for the first time, such as how we saved beats as objects with the keyUp and rest between the next beat included, layers of beats as objects, tracks as objects, etc.

##Next Steps:
We hope to convert the project to mobile and tablet, and afterwards a UI will be needed out for when a user replays a track (for now the track simply plays from a user profile). Lastly, we would implement a feature to allow hte user to not only save and replay a track, but go back to edit it, as well as add new kits.

A personal BHAG will be to allow real instrument audio input as well as being able to save ones own instrument sounds into a user's suite of kits.

##Team Members:
- Brad Harris
- Richie Yi
- Thomas Farr
- Jacqueline Phan
- Michael Dumalag
