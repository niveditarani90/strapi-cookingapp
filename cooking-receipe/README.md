# cooking-receipe

A quick description of cooking-receipe.
A Cooking receipe app with various fields related to cooking .
Test Scenario : Create the app content type using content Builder strapi plugin and try renaming 

Precondition
User has Mongodb , npm, strapi installed.

Steps :
Go to Content builder and select "Add content type" 
Enter the name -> hit save 
Start adding -> field from the shown screen .
Hit Save 
Select the content type from the list of entries (here receipename) -> select add new -> fill the fields -> observe the screen [Issue-1]
Go Back to content type builder plugin -> select the edit icon in front of the content type 
Try changing the name of the content type -> observe [Issue -2]
Try creating a new content type by selecting "Add Content Type" from the screen -> Observe [Issue-3]

Expectation :
All the entered fields details should be listed 
One should be able to succesfully change the file name with no issues .
One should be able to create new content types without any issues.

Actual results :
issue-1
Only new created field id is listed when total of 6 fields were cerated for the selected content type (Receipename) Not sure if this should be expected.
issue-2
Unable to change the content type name . throws internal server error also in terminal , user can see errono -2
Also upon refreshing the page multiple times , the the new updated name was seen , but previously added fields were deleted 
issue-3
Once trying to create new content type using the add icon ,shows  the name of previously created content type . upon refreshing the page , Infinite loading was seen . 
Terminal terminated by giving error "Something went wrong". After this , user was unable to launch the app from local host .

Note : Also tried with the other app , DELETE Does not work smoothly . content type gets deleted but refreshing the page bring back the entry . On trying to delete again throws "SERVER ERROR" .
But user is able to add fields to teh content type. Not sure if this should be expected .
