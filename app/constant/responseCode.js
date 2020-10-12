
var SUCCESS = 200;
var ERROR = 400;
var ASSIGN_MESSAGE= 'Vehicle assign successfully.';
var ASSIGN_USER_INVALID= 'You have already one vehicle so did not request second vehicle. or VehicleOwnership is deleted';
var ASSIGN_VEHICLE_INVALID= 'Already assign this vehicle to another user.';
var ASSIGN_INVALID= 'Cannot update vehicle, Maybe Vehicle was not found or req.body is empty!';
var DELETE_MESSAGE = 'Vehicle Membership deleted successfully.'
var DELETE_INDIVIDUAL_MESSAGE = 'Cannot delete Vehicle Membership. Maybe Vehicle Membership was not found!'
var DELETE_INVALID = 'Some error occurred while removing all Vehicle Membership.'
var VEHICLE_OCCUPIED = 'List of vehicle occupied'
var VEHICLE_OCCUPIED_INVALID = 'Some error occurred while retrieving occupied vehicle.'
var VEHICLE_AVAILABLE = 'List of vehicle available'
var VEHICLE_AVAILABLE_INVALID = 'Some error occurred while retrieving available vehicle.'
var USER_VEHICLE = 'Details of user vehicle'
var USER_VEHICLE_UUID_INVALID = 'No data found'
var USER_VEHICLE_INVALID = 'Some error occurred while details of user vehicle.'
var CONTENT_MESSAGE = 'Content could not be an empty'
var USER_REGISTER_MESSAGE = 'User created successfully.'
var USER_REGISTER_MESSAGE_INVALID = 'Some error occurred while creating user'
var VEHICLE_REGISTER_MESSAGE = 'Vehicle created successfully.'
var VEHICLE_REGISTER_MESSAGE_INVALID = 'Some error occurred while creating vehicle'

module.exports = {

SUCCESS ,
ERROR ,
ASSIGN_MESSAGE,
ASSIGN_USER_INVALID,
ASSIGN_VEHICLE_INVALID,
ASSIGN_INVALID,
DELETE_MESSAGE,
DELETE_INDIVIDUAL_MESSAGE,
DELETE_INVALID,
VEHICLE_OCCUPIED,
VEHICLE_OCCUPIED_INVALID,
VEHICLE_AVAILABLE,
USER_VEHICLE_UUID_INVALID,
VEHICLE_AVAILABLE_INVALID,
USER_VEHICLE,
USER_VEHICLE_INVALID,
CONTENT_MESSAGE,
USER_REGISTER_MESSAGE,
USER_REGISTER_MESSAGE_INVALID,
VEHICLE_REGISTER_MESSAGE,
VEHICLE_REGISTER_MESSAGE_INVALID
};
