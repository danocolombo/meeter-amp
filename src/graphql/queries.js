/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
      id
      client {
        id
        name
        acronym
        city
        state
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      mtgDate
      title
      type
      facilitator {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      supportRole {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      worship
      avContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      attenandance
      newcomers
      donations
      meal
      mealContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      mealCnt
      cafeCoordinator {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      cafeCnt
      greeterContact1 {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      greeterContact2 {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      resourceContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      announcementContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      closingContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      securityContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      setupContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      cleaningContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      transportationContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      transportationCnt
      nurseryContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      nurseryCnt
      childrenContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      childrenCnt
      youthContact {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      youthCnt
      groups {
        items {
          id
          title
          gender
          location
          attendance
          notes
          createdAt
          updatedAt
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listMeetings = /* GraphQL */ `
  query ListMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        client {
          id
          name
          acronym
          city
          state
          createdAt
          updatedAt
        }
        mtgDate
        title
        type
        facilitator {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        supportRole {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        worship
        avContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        attenandance
        newcomers
        donations
        meal
        mealContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        mealCnt
        cafeCoordinator {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        cafeCnt
        greeterContact1 {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        greeterContact2 {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        resourceContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        announcementContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        closingContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        securityContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        setupContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        cleaningContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        transportationContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        transportationCnt
        nurseryContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        nurseryCnt
        childrenContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        childrenCnt
        youthContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        youthCnt
        groups {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      meeting {
        id
        client {
          id
          name
          acronym
          city
          state
          createdAt
          updatedAt
        }
        mtgDate
        title
        type
        facilitator {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        supportRole {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        worship
        avContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        attenandance
        newcomers
        donations
        meal
        mealContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        mealCnt
        cafeCoordinator {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        cafeCnt
        greeterContact1 {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        greeterContact2 {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        resourceContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        announcementContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        closingContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        securityContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        setupContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        cleaningContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        transportationContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        transportationCnt
        nurseryContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        nurseryCnt
        childrenContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        childrenCnt
        youthContact {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        youthCnt
        groups {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      title
      gender
      location
      attendance
      facilitator {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      coFacilitator {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meeting {
          id
          mtgDate
          title
          type
          worship
          attenandance
          newcomers
          donations
          meal
          mealCnt
          cafeCnt
          transportationCnt
          nurseryCnt
          childrenCnt
          youthCnt
          notes
          createdAt
          updatedAt
        }
        title
        gender
        location
        attendance
        facilitator {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        coFacilitator {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      user {
        id
        firstName
        lastName
        login
        authID
        personID {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        defaultClient {
          id
          name
          acronym
          city
          state
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      firstName
      lastName
      email
      phone
      shirt
      services {
        items {
          id
          title
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      id
      title
      description
      person {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        person {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      acronym
      city
      state
      members {
        items {
          id
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        acronym
        city
        state
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      role
      status
      userID {
        id
        firstName
        lastName
        login
        authID
        personID {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        defaultClient {
          id
          name
          acronym
          city
          state
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      client {
        id
        name
        acronym
        city
        state
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        role
        status
        userID {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        client {
          id
          name
          acronym
          city
          state
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      login
      authID
      personID {
        id
        user {
          id
          firstName
          lastName
          login
          authID
          createdAt
          updatedAt
        }
        firstName
        lastName
        email
        phone
        shirt
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      defaultClient {
        id
        name
        acronym
        city
        state
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        login
        authID
        personID {
          id
          firstName
          lastName
          email
          phone
          shirt
          createdAt
          updatedAt
        }
        defaultClient {
          id
          name
          acronym
          city
          state
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
