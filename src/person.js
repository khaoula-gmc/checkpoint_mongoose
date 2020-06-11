 let mongoose=require('mongoose')
 const dotenv=require('dotenv')
 dotenv.config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to person database ')
  })
  .catch((err) => {
    console.error(err)
  })



// Create a person schema

let personSchema=new mongoose.Schema(
    {
    name:
    {
        type:String,
        required:true
    },
    age:Number,
    favoriteFoods:[String]

    })


    // create a person model

let personModel=mongoose.model('person', personSchema)

/*******************************create and save a record of the model*************************************/  
 let newPerson=new personModel({name:'Emna', age:10, favoriteFoods:['pizza','raviolli','spaguetti']})
  newPerson.save().then((doc)=>console.log(doc)).catch((err)=>console.error(err))


/*********************create many records with model.create*********************************/  
// let arrayOfPeople=[{name:'Majd', age: 7, favoriteFoods:['pizza','seafood','hamburger']},
//                    {name:'Sarah', age: 3, favoriteFoods:['fruits','seafood','sweets']},
//                    {name:'Mary', age: 30, favoriteFoods:['pasta','pizza','sweets']},
//                    {name:'Sarah', age: 20, favoriteFoods:['fruits','hamburger','burrito']},
//                    {name:'Mary', age: 15, favoriteFoods:['burrito','seafood','sweets']}]
// personModel.create(arrayOfPeople,(err)=>{
//                                     if(err) console.log(err)
//                                     else console.log(arrayOfPeople)})

/***********************************Model.find() to search the database**************************************/ 
// personModel.find({name:'Sarah'}).then(doc=>console.log(doc)).catch((err)=>console.error(err))



/************************************Model.findOne() to return a single matching document from the database******************************/ 
// personModel.findOne({favoriteFoods:{$in:['pizza']}}).then(doc=>console.log(doc)).catch((err)=>console.error(err))




 /******************************Model.findById() to search by _id*****************************************/ 
// personModel.findById(5ee0e86b0f3efe5ee83a5b8a).then(doc=>console.log(doc)).catch((err)=>console.error(err))



/***********************perform classic updates by Running Find, Edit then Save***************************/
// personModel.findById(5ee0e86b0f3efe5ee83a5b8a).then((person)=>{person.favoriteFoods.push('hamburger')
// person.save()
// console.log(person)}).catch((err)=>console.error(err))



/*************************Perform New Updates on a Document Using model.findOneAndUpdate()*************************************************************** */
// personModel.findOneAndUpdate({name:"Majd"},{age:20},{new:true}).then((person)=>{
//                                                             person.save()
//                                                             console.log(person)}).catch((err)=>console.error(err))


/*************************Delete One Document Using model.findByIdAndRemove********************************************** */
//personModel.deleteOne({_id:'5ee13cd227fac628a8656a8c'}).then((person)=>console.log(person)).catch((err)=>console.error('err'))



/*************************Delete Many Documents with model.remove()********************************************** */


// personModel.remove({name:'Emna'}).then(()=>console.log('name:"Emna" removed')).catch((err)=>console.error(err))




/*************************Chain Search Query Helpers to Narrow Search Results************************************************ */
// personModel.find({favoriteFoods:{$in:['burrito']}}).sort({name:1}).select('-age').limit(2).exec().then(doc=>console.log(doc)).catch((err)=>console.error(err))
// we can also write: personModel.find({favoriteFoods:{$in:['burrito']}},{age:0}).sort({name:1}).limit(2).exec().then(doc=>console.log(doc)).catch((err)=>console.error(err)) 