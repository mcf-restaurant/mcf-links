# MCF Files and Database Connection
File created in HTML and JavaScript
Connection to data base using Google Script .gs Files
Used .gs file URL Link to connect with the Database
All data stores in the Google Sheet, Google Sheet used as a Database

**#view-Diets.html**
In this file having the data of the diety that are continue to feed in Restaurant
1. Login >>
2. View their diets
   
flowchart TD
    Index[index.html] --> Menu[View Menu Button]
    Menu --> ViewItems[View Items]

    Index --> Order[Order Now Button]
    Order --> SelectItems[Select Items]
    SelectItems --> FillContact[Fill Contact]
    FillContact --> OrderPlaced[Order Placed]

    Index --> Attendance[Submit Attendance]
    Attendance --> FillAttDetails[Fill Details]
    FillAttDetails --> SubmitAtt[Submit]

    Index --> Feedback[Feedback Submission]
    Feedback --> FillFbDetails[Fill Details]
    FillFbDetails --> SubmitFb[Submit]

    Index --> CreateAcc[Create Account]
    CreateAcc --> SubmitAcc[Submit]

    Index --> LoginUser[Login - User]
    LoginUser --> ViewUserDiets[View Their Diets Details]

    Index --> LoginAdmin1[Login - Admin]
    LoginAdmin1 --> ViewAllDiets[View All Users Diets Details]

    Index --> LoginAdmin2[Login - Admin]
    LoginAdmin2 --> ViewAllOrders[View All Orders]
