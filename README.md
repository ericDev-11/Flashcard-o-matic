# Flashcard-o-matic
React Project that allows for viewing, studying, editing, creating, and deleting of cards and decks.
<br />
_run `npm install` then `npm run start:server` in one terminal and `npm run start:react` in another to get the application running_
## Home Screen
![Home Screen](/public/images/flashcard-home.png?raw=true)
Here, the user can see the basic information of each deck. The buttons on this screen will re-render the page as follows:
- **Create Deck:** brings the user to the 'Create Deck' screen
- **View:** brings the user to the 'Deck' screen of the associated [View] button
- **Study:** brings the user to the 'Study' screen of the associated [Study] button
- **Delete:** brings up a modal for deleting the deck of the asscoiated [Delete] button
#### Deck Delete Modal
![Deck Delete Modal](/public/images/flashcard-home-2.png?raw=true)
Here, the user can click 'OK' to permanently delete the deck, or 'Cancel' to cancel the deletion. Either way, the user will stay on the 'Home' screen.
## View Screen
![View Screen](/public/images/flashcard-view.png?raw=true)
Here, the user gets the added information of the card contents, along with some buttons that will re-render the page as follows:
- **Edit (for the deck):** brings the user to the deck's 'Edit Deck' screen
- **Study:** brings the user to the deck's 'Study' screen
- **Add Cards:** brings the user to to the deck's 'Add Card' screen
- **Delete (for the deck):** brings up the same modal as the 'Home' screen with the same functionality as stated above
- **Edit (for each card):** brings the user to the 'Edit Card' screen of the associated [Edit] button
- **Delete (for each card):** brings up a modal for deleting the deck of the associated [Delete] button
#### Card Delete Modal
![Card Delete Modal](/public/images/flashcard-view-2.png?raw=true)
Here, the user can click 'OK' to permanently delete the card, or 'Cancel' to cancel the deletion. Either way, the user will stay on the 'View' screen.
## Study Screen
![Study Screen - flip](/public/images/flashcard-study-1.png?raw=true)
![Study Screen - next](/public/images/flashcard-study-2.png?raw=true)
Here, the user can view the front (or question) side of the card (as seen in the first screenshot) before clicking the [Flip] button to view the back (or answer) side
of the card (as seen in the second screenshot). Only when the user is on the back side of the card will the [Next] button be rendered and when clicked, will take the 
user to the next card in the deck.
#### Not Enough Cards
![Study Screen - next](/public/images/flashcard-study-4.png?raw=true)
If there are not three or more cards in a deck and the user clicks the [Study] button, they will see this screen and be given the abilty to go to the 'Add Card' screen
to add the appropriate amount of cards to the deck.
#### Restart Deck Modal
![Study Screen - next](/public/images/flashcard-study-3.png?raw=true)
When the user clicks the [Next] button on the last card of the deck, this modal will pop up and the user can click 'OK' to restart the deck, or 'Cancel' to return to 
the 'Home' screen.
## Create & Edit Deck Screens
![Create Deck Screen](/public/images/flashcard-create-deck.png?raw=true)
![Edit Deck Screen](/public/images/flashcard-edit-deck.png?raw=true)
For the most part, these screens have the same functionality. The difference is where the [Submit] and [Cancel] buttons take the user. On the 'Create Deck' screen,
both buttons take the user back to the 'Home' screen, either with the new deck now visable, or the creation canceled. On the 'Edit Deck' screen, both buttons take the
user back to the 'Deck' screen, either with the deck updated, or the same as before if canceled.
## Add & Edit Card Screens
![Add Card Screen](/public/images/flashcard-add-card.png?raw=true)
![Edit Card Screen](/public/images/flashcard-edit-card.png?raw=true)
Same with the deck forms above, these screens mostly have the same functionality. Again the difference is in the buttons. On the 'Edit Card' screen, both the [Submit]
and [Cancel] buttons take the user back to the 'Deck' screen, either with the updated card now visable, or the same as before if canceled. On the 'Add Card' screen,
clicking the [Submit] button will create the card in the deck and reset the form to allow for multiple cards to be created. Clicking the [Done] button will take the
user back to the 'Deck' screen with new card(s) visable in the deck, unless none were submitted beforehand.
## Built with:
- JavaScript
- React/React Router
- HTML
- CSS with Bootstrap
