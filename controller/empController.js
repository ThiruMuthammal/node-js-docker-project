
const empRepository = require('../modules/employeeSchema');

/**
 * A
 * 'edd new employee details
 *  
 * @param {addEmployee} req  
 * @param {saveEmployee} res 
 * 
 */
const addEmployees = async (req, res) => {
    const addEmployee = await empRepository({
        Name: req.body.Name,
        EmpId: req.body.EmpId,
        EmailId: req.body.EmailId,
        PhoneNumber: req.body.PhoneNumber,
        Designation: req.body.Designation,
        Salary: req.body.Salary
    });
    try {
        const saveEmployee = await addEmployee.save();
        res.send(saveEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
};

/**
 * Get all employee details
 * @param {*} req 
 * @param {getAllEmployee} res 
 * 
 */

const getAllEmployee = async (req, res) => {

    try {

        const getEmployees = await empRepository.find();
        console.log(getEmployees);
        res.json(getEmployees);
    }

    // try {
    //     const getEmployees = await empRepository.
    //         //find({"Salary":{$lte:8000}})
    //         aggregate([{
    //             $sort: { "Name": 1 },
    //         },
    //         { $limit: 3 },
    //        // { $group: { _id: { Name: "$Name", Salary: "$Salary", Designation: "$Designation"} } },
    //         {
    //             $match:
    //                 { "Salary": { $lte: 10000 } }
    //         },
    //         {
    //             $project:
    //                 { Name: 1, _id: 1, Designation: 1, Salary: 1 }
    //         },
    //             // {$count: "Model"}

    //         ]);
    //     res.status(200).json(getEmployees);
    // }
    catch (err) {
        res.json({ message: err });
    }
};

/**
 * Get Employee Details By Id
 * @param {id} req 
 * @param {getEmpById} res 
 */

const getEmployeeById = async (req, res) => {
    try {
        const getEmpById = await empRepository.findById(req.params.id);
        res.json(getEmpById);
    } catch (error) {
        res.json({ message: error });
    }
};

/**
 * Update Employee Details
 * @param {id} req 
 * @param {updateEmployee} res 
 */

const updateEmployee = async (req, res) => {
    try {
        const updateEmployee = await empRepository.findByIdAndUpdate( {_id: req.params.id }, {
            Name: req.body.Name,
            EmpId: req.body.EmpId,
            EmailId: req.body.EmailId,
            PhoneNumber: req.body.PhoneNumber,
            Designation: req.body.Designation,
            Salary: req.body.Salary
        });
        res.status(200).json(updateEmployee);
    }
    catch (err) {
        res.json({ message: err })
    }
};
// /**
//  * 
//  * @param {updateEmp} req 
//  * @param {updateEmployee} res 
//  */
// const updateEmployee = async (req, res) => {

//     try {
//         const updateEmp = {
//             Name: req.body.Name,
//             EmpId: req.body.EmpId,
//             EmailId: req.body.EmailId,
//             PhoneNumber: req.body.PhoneNumber,
//             Designation: req.body.Designation,
//             Salary: req.body.Salary
//         };

//         const updateEmployee = await empRepository.findByIdAndUpdate(
//             { _id: req.params.id },
//             updateEmp
//         );
//         res.json(updateEmployee);
//     } catch (error) {
//         res.json({ message: error });
//     }
// };

/**
 * Delete Employee 
 * @param {id} req 
 * @param {removeEmp} res 
 */
const deleteEmployee = async (req, res) => {
    try {
        const removeEmp = await empRepository.findByIdAndDelete(req.params.id);
        res.json(removeEmp);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports = {
    getAllEmployee,
    addEmployees,
    updateEmployee,
    getEmployeeById,
    deleteEmployee
}  