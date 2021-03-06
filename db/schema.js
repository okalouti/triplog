module.exports = `
    type User {
      id: Int
      name: String
      cognitoId: String
      createdAt: String
      updatedAt: String
    }
    type Device {
      id: Int
      userId: Int
      title: String
      deviceSerial: String
      createdAt: String
      updatedAt: String
    }
    type Photo {
      id: Int
      userId: Int
      title: String
      longitude: Float
      latitude: Float
      altitude: Float
      deviceId: Int
      groupId: Int
      orderInGroup: Int
      comment: String
      imageFile: String
      bearing: Float
      createdAt: String
      updatedAt: String
    }
    type GpsPoint {
      id: Int
      userId: Int
      title: String
      longitude: Float
      latitude: Float
      altitude: Float
      groupId: Int
      orderInGroup: Int
      comment: String
      createdAt: String
      updatedAt: String
    }
    type Group {
      id: Int
      userId: Int
      title: String
      comment: String
      longitude: Float
      latitude: Float
      altitude: Float
      startTime: String
      endTime: String
      groupId: Int
      orderInGroup: Int
      createdAt: String
      updatedAt: String
    }
    type IntervalConfig {
        id: Int
        userId: Int
        title: String
        deviceId: Int
        startMethod: String
        startTimeOfDay: Int
        startEpoch: Int
        startCountdown: Int
        stopMethod: String
        stopTimeOfDay: Int
        stopEpoch: Int
        stopCountdown: Int
        interval: Int
        createdAt: String
        updatedAt: String
    }
    type RasppiConfig {
      id: Int
      userId: Int
      selectedInterval: Int
      gpsInterval: Int
      createdAt: String
      updatedAt: String
    }
    input GetPhotoByDate {
      userId: Int
      startTime: String
      endTime: String
    }

    input GetGpsByDate {
      userId: Int
      startTime: String
      endTime: String
    }

    input InputUser {
      id: Int
      userId: Int
      name: String
      cognitoId: String
      password: String
      createdAt: String
      updatedAt: String
    }
    input InputDevice {
      id: Int
      userId: Int
      title: String
      deviceSerial: String
      createdAt: String
      updatedAt: String
    }
    input InputPhoto {
      id: Int
      userId: Int
      title: String
      longitude: Float
      latitude: Float
      altitude: Float
      deviceId: Int
      groupId: Int
      orderInGroup: Int
      comment: String
      imageFile: String
      bearing: Float
      createdAt: String
      updatedAt: String
    }
    input InputGpsPoint {
      id: Int
      userId: Int
      title: String
      longitude: Float
      latitude: Float
      altitude: Float
      groupId: Int
      orderInGroup: Int
      comment: String
      createdAt: String
      updatedAt: String
    }
    input InputGroup {
      id: Int
      userId: Int
      title: String
      comment: String
      longitude: Float
      latitude: Float
      altitude: Float
      startTime: String
      endTime: String
      groupId: Int
      orderInGroup: Int
      createdAt: String
      updatedAt: String
    }
    input InputIntervalConfig {
      id: Int
      userId: Int
      title: String
      deviceId: Int
      startMethod: String
      startTimeOfDay: Int
      startEpoch: Int
      startCountdown: Int
      stopMethod: String
      stopTimeOfDay: Int
      stopEpoch: Int
      stopCountdown: Int
      interval: Int
      createdAt: String
      updatedAt: String
    }
    input InputRasppiConfig {
      id: Int
      userId: Int
      selectedInterval: Int
      gpsInterval: Int
      createdAt: String
      updatedAt: String
    }
    input CamInputPhoto {
      deviceSerial: String
      imageFile: String
      longitude: Float
      latitude: Float
      altitude: Float
      createdAt: String
      updatedAt: String
    }
    input CamInputGps {
      deviceSerial: String
      longitude: Float
      latitude: Float
      altitude: Float
      createdAt: String
      updatedAt: String
    }


    input UpdateUser {
      id: Int!
      userId: Int
      name: String
      cognitoId: String
      password: String
      createdAt: String
      updatedAt: String
    }
    input UpdateDevice {
      id: Int!
      userId: Int
      title: String
      deviceSerial: String
      createdAt: String
      updatedAt: String
    }
    input UpdatePhoto {
      id: Int!
      userId: Int
      title: String
      longitude: Float
      latitude: Float
      altitude: Float
      deviceId: Int
      groupId: Int
      orderInGroup: Int
      comment: String
      imageFile: String
      bearing: Float
      createdAt: String
      updatedAt: String
    }
    input UpdateGpsPoint {
      id: Int!
      userId: Int
      title: String
      longitude: Float
      latitude: Float
      altitude: Float
      groupId: Int
      orderInGroup: Int
      comment: String
      createdAt: String
      updatedAt: String
    }
    input UpdateGroup {
      id: Int!
      userId: Int
      title: String
      comment: String
      longitude: Float
      latitude: Float
      altitude: Float
      startTime: String
      endTime: String
      groupId: Int
      orderInGroup: Int
      createdAt: String
      updatedAt: String
    }
    input UpdateIntervalConfig {
      id: Int!
      userId: Int
      title: String
      startMethod: String
      startTimeOfDay: Int
      startEpoch: Int
      startCountdown: Int
      stopMethod: String
      stopTimeOfDay: Int
      stopEpoch: Int
      stopCountdown: Int
      interval: Int
      createdAt: String
      updatedAt: String
    }
    input UpdateRasppiConfig {
      id: Int!
      userId: Int
      selectedInterval: Int
      gpsInterval: Int
      createdAt: String
      updatedAt: String
    }


    input DestroyUser {
      id: Int!
    }
    input DestroyDevice {
      deviceSerial: String!
      userId: Int!

    }
    input DestroyPhoto {
      id: Int!
      userId: Int!

    }
    input DestroyGpsPoint {
      id: Int!
      userId: Int!

    }
    input DestroyGroup {
      id: Int!
      userId: Int!

    }
    input DestroyIntervalConfig {
      id: Int!
      userId: Int!

    }
    input DestroyRasppiConfig{
      id: Int!
      userId: Int!

    }

    type Query {
      ReadUser(type: InputUser): [User]
      ReadDevice(type: InputDevice): [Device]
      ReadPhoto(type: InputPhoto): [Photo]
      ReadGpsPoint(type: InputGpsPoint): [GpsPoint]
      ReadGroup(type: InputGroup): [Group]
      ReadIntervalConfig(type: InputIntervalConfig): [IntervalConfig]
      ReadRasppiConfig(type: InputRasppiConfig): [RasppiConfig]
      GetPhotoByDate(type: GetPhotoByDate): [Photo]
      GetGpsByDate(type: GetGpsByDate): [GpsPoint]
    }

    type Mutation {
      CreateUser(input: InputUser): Boolean
      CreateDevice(input: InputDevice): Boolean
      CreatePhoto(input: InputPhoto): Boolean
      CreateGpsPoint(input: InputGpsPoint): Boolean
      CreateGroup(input: InputGroup): Boolean
      CreateIntervalConfig(input: InputIntervalConfig): Boolean
      CreateRasppiConfig(input: InputRasppiConfig): Boolean
      CamCreatePhoto(input: CamInputPhoto): Boolean
      CamCreateGps(input: CamInputGps): Boolean

      UpdateUser(input: UpdateUser): Boolean
      UpdateDevice(input: UpdateDevice): Boolean
      UpdatePhoto(input: UpdatePhoto): Boolean
      UpdateGpsPoint(input: UpdateGpsPoint): Boolean
      UpdateGroup(input: UpdateGroup): Boolean
      UpdateIntervalConfig(input: UpdateIntervalConfig): Boolean
      UpdateRasppiConfig(input: UpdateRasppiConfig): Boolean

      DestroyUser(input: DestroyUser): Boolean
      DestroyDevice(input: DestroyDevice): Boolean
      DestroyPhoto(input: DestroyPhoto): Boolean
      DestroyGpsPoint(input: DestroyGpsPoint): Boolean
      DestroyGroup(input: DestroyGroup): Boolean
      DestroyIntervalConfig(input: DestroyIntervalConfig): Boolean
      DestroyRasppiConfig(input: DestroyRasppiConfig): Boolean
    }
`;
