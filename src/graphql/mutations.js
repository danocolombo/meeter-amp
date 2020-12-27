/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
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
export const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
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
export const deleteMeeting = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
