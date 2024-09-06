import User from "../model/user.model.js";

// controller for user create
async function addUser(req, res) {
  // access all feilds if User using req.body
  const { name, email, city, number } = req.body;

  try {

    // user create
    const user = await User.create({
      name,
      email,
      city,
      number,
    });

    // when user is created successfully then send response
    res.status(200).json({
      message: "User created Successfully |||",
      data: user,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "User not Create ?",
      success: false,
      error: true,
    });
  }
}
async function getUser(req,res) {
  try {
    const allUser = await User.find();
     
    if(!allUser){
      res.json({
        message:"not user found",
      })
    }
    res.status(200).json({
  message : "all users succesfull found",
  data:allUser,
  success:true,
  error:false
  });
    
  } catch (error) {
    res.status(500).json({
      message:"something went wrong",
      success:false,
      error:true
    });
  }
}

export {addUser, getUser};
