# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
## People
* Paul Montal
* Jason Wang

## Check Your Understanding
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not use unit test to test the "message" feature since the feature likely have multiple moving parts. For example, "max message length" or "check writing grammer" or "encoding message" are some parts that might be in the "message" feature which could be edited for update purposes. This is not the strong suit for unit testing as unit testing ensures a component works in a growing application.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

I would use unit test to test the "max message length" feature of a messaging application since "max message length" is likely an atomic builing block of the overall application with no other components within. 
