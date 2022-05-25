define(["postmonger"], function (Postmonger) {
  "use strict";

  var connection = new Postmonger.Session();
  var authTokens = {};
  var payload = {};
  var eventDefinitionKey;
  var entryObject;
  var journeyName;
  var entryTitle;

  console.log("Call customActivity.js");

  $(window).ready(onRender);

  connection.on("initActivity", initialize);
  connection.on("requestedTokens", onGetTokens);
  connection.on("requestedEndpoints", onGetEndpoints);
  connection.on("requestedInteraction", onRequestedInteraction);
  connection.on(
    "requestedTriggerEventDefinition",
    onRequestedTriggerEventDefinition
  );
  connection.on("requestedDataSources", onRequestedDataSources);
  connection.on("clickedNext", save);

  function onRender() {
    // JB will respond the first time 'ready' is called with 'initActivity'
    connection.trigger("ready");
    connection.trigger("requestTokens");
    connection.trigger("requestEndpoints");
    connection.trigger("requestInteraction");
    connection.trigger("requestTriggerEventDefinition");
    connection.trigger("requestDataSources");

    $("#url").change(function () {
      var url = getURL();
    });

    $("#domain").change(function () {
      var domain = getDomain();
    });

    $("#payload").change(function () {
      var contentJSON = getcontentJSON();
    });

    $("#entryObject").change(function () {
      var selectEntryObject = getEntryObject();
    });
  }

  function onRequestedDataSources(dataSources) {
    console.log("*** requestedDataSources ***");
    //console.log(dataSources);
  }

  function onRequestedInteraction(interaction) {
    console.log("*** requestedInteraction ***");
    eventDefinitionKey = interaction.triggers[0].metaData.eventDefinitionKey;
    entryObject = interaction.triggers[0].configurationArguments.objectAPIName;
    entryTitle = interaction.triggers[0].metaData.title;
    journeyName = interaction.name;
    // console.log(JSON.stringify(interaction));
    // console.log("EDK: " + eventDefinitionKey);
    // console.log("EO: " + entryObject);
    // console.log("ET: " + entryTitle);
  }

  function onRequestedTriggerEventDefinition(eventDefinitionModel) {
    console.log("*** requestedTriggerEventDefinition ***");
    //console.log(eventDefinitionModel);
  }

  function initialize(data) {
    console.log(data);
    if (data) {
      payload = data;
    }

    var url;
    var contentJSON;
    var domain;
    var selectEntryObject;
    var hasInArguments = Boolean(
      payload["arguments"] &&
      payload["arguments"].execute &&
      payload["arguments"].execute.inArguments &&
      payload["arguments"].execute.inArguments.length > 0
    );

    var inArguments = hasInArguments
      ? payload["arguments"].execute.inArguments
      : {};

    console.log("Activity inArguments: ", inArguments);

    $.each(inArguments, function (index, inArgument) {
      $.each(inArgument, function (key, val) {
        console.log("inArg key: " + key);
        console.log("inArg val: " + val);
        if (key === "url") {
          url = val;
        }

        if (key === "contentJSON") {
          contentJSON = val;
        }

        if (key === "domain") {
          domain = val;
        }
        if (key === "selectEntryObject") {
          selectEntryObject = val;
        }
      });
    });

    $("#url").val(url);
    $("#payload").val(contentJSON);
    $("#domain").val(domain);
    $("#entryObject").val(selectEntryObject);
    connection.trigger("updateButton", {
      button: "next",
      text: "done",
      visible: true,
    });
  }

  function onGetTokens(tokens) {
    authTokens = tokens;
  }

  function onGetEndpoints(endpoints) {
    console.log(endpoints);
  }

  function save() {
    var name = "Webhook 1.0";
    var url = getURL();
    var contentJSON = getcontentJSON();
    var domain = getDomain();
    var selectEntryObject = getEntryObject();
    var preObject;
    var personContactId
    var accountId;
    var firstName;
    var lastName;
    var opportunityId;
    var stageName;
    var courseOfStudyLookup;
    var isPrimary;
    var programFamily;
    var cpAccountId;
    var salutation;
    var productName;
    var productFamily;
    var productId;
    var degree;
    var createdDate;
    var optIn;
    var personEmail;
    var country;
    var voucher;
    var englishLevel;
    var workExperience;
    var budget;
    var rate;
    var studyAdvisor;
    var phone;
    var obwKey;
    var migrationUser;
    var migrationUserId;

    if (entryTitle == "Data Extension") {
      entryObject = "DE";
    }

    switch (selectEntryObject) {
      case "Opportunity":
        accountId = "Opportunity:Account:Id";
        personContactId = "Opportunity:Account:PersonContactId";
        firstName = "Opportunity:Account:FirstName";
        lastName = "Opportunity:Account:LastName";
        opportunityId = "Opportunity:Id";
        stageName = "Opportunity:StageName";
        courseOfStudyLookup = "Opportunity:CourseOfStudyLookup__c";
        isPrimary = "Opportunity:IsPrimary__c";
        programFamily = "Opportunity:ProgramFamily__c";
        cpAccountId = "Opportunity:Account:CP_Account_ID__c";
        salutation = "Opportunity:Account:Salutation";
        productName =
          "Opportunity:CourseOfStudyLookup__r:Product_Display_Name__c";
        productFamily = "Opportunity:CourseOfStudyLookup__r:Family";
        productId = "Opportunity:CourseOfStudyLookup__r:Id";
        degree = "Opportunity:DegreeName__c";
        createdDate = "Opportunity:CreatedDate";
        optIn = "Opportunity:Account:OptInEmail__c";
        personEmail = "Opportunity:Account:PersonEmail";
        country = "Opportunity:Account:ShippingCountry";
        voucher = "Opportunity:VoucherID__c";
        englishLevel = "Opportunity:EnglishLevel__c";
        workExperience = "Opportunity:WorkExperience__c";
        budget = "Opportunity:BudgetPerMonth__c";
        rate = "Opportunity:RatePerInterval__c";
        studyAdvisor = "Opportunity:StudyAdvisor__c";
        phone = "Opportunity:Account:Phone";
        obwKey = "Opportunity:ObwUserKey__c";
        migrationUser = "Opportunity:LastModifiedBy:Migration_User__c";
        migrationUserId = "Opportunity:LastModifiedBy:Migration_User__c";
        break;
      //case "OpportunityArchive__c": --> this equals the default
      case "DE":
        accountId = "Account ID";
        personContactId = "PersonContactID";
        firstName = "firstName";
        lastName = "lastName";
        opportunityId = "Opportunity ID";
        stageName = "Stage";
        courseOfStudyLookup = "Course Of Study Lookup";
        isPrimary = "Is Primary";
        programFamily = "Program Family";
        cpAccountId = "CP Account ID"
        salutation = "Salutation";
        productName = "Product Name";
        productFamily = "Product Family";
        productId = "Product ID";
        degree = "Degree_old";
        createdDate = "Created Date";
        optIn = "Opt-In Email";
        personEmail = "Email";
        country = "Country";
        voucher = "Voucher ID";
        englishLevel = "English Level";
        workExperience = "Work Experience";
        budget = "Budget Per Month";
        rate = "Rate Per Interval";
        studyAdvisor = "Study Advisor";
        phone = "Phone 1";
        obwKey = "ObwUserKey";
        migrationUser = "Migration User";
        migrationUserId = "Migration User Id";
        break;
      default:
        accountId = "OpportunityArchive__c:Account__r:Id";
        personContactId = "OpportunityArchive__c:Account:PersonContactId";
        firstName = "OpportunityArchive__c:Account__r:FirstName";
        lastName = "OpportunityArchive__c:Account__r:LastName";
        opportunityId = "OpportunityArchive__c:Opportunity__r:Id";
        stageName = "OpportunityArchive__c:StageName__c";
        courseOfStudyLookup = "OpportunityArchive__c:CourseOfStudyLookup__c";
        isPrimary = "OpportunityArchive__c:IsPrimary__c";
        programFamily = "OpportunityArchive__c:Program_Family__c";
        cpAccountId = "OpportunityArchive__c:Account:CP_Account_ID__c";
        salutation = "OpportunityArchive__c:Account__r:Salutation";
        productName =
          "OpportunityArchive__c:CourseOfStudy__r:Product_Display_Name__c";
        productFamily = "OpportunityArchive__c:CourseOfStudy__r:Family";
        productId = "OpportunityArchive__c:CourseOfStudy__r:Id";
        degree = "OpportunityArchive__c:degree__c";
        createdDate = "Created Date";
        optIn = "OpportunityArchive__c:Account__r:OptInEmail__c";
        personEmail = "OpportunityArchive__c:Account__r:PersonEmail";
        country = "OpportunityArchive__c:Account__r:ShippingCountry";
        voucher = "OpportunityArchive__c:VoucherID__c";
        englishLevel = "OpportunityArchive__c:EnglishLevel__c";
        workExperience = "OpportunityArchive__c:WorkExperience__c";
        budget = "OpportunityArchive__c:BudgetPerMonth__c";
        rate = "OpportunityArchive__c:RatePerInterval__c";
        studyAdvisor = "OpportunityArchive__c:StudyAdvisor__c";
        phone = "OpportunityArchive__c:Account__r:Phone";
        obwKey = "OpportunityArchive__c:ObwUserKey__c";
        migrationUser = "OpportunityArchive__c:LastModifiedBy:Migration_User__c";
        migrationUserId = "OpportunityArchive__c:LastModifiedBy:Migration_User__c";
        break;
    }
    payload.name = name;

    payload["arguments"].execute.inArguments = [
      { tokens: authTokens, },
      { url: url, },
      { contentJSON: contentJSON, },
      { emailAddress: "{{InteractionDefaults.Email}}", },
      { EntryObject: entryObject, },
      { personContactId: "{{Event." + eventDefinitionKey + '."' + personContactId + '"}}', },
      { firstName: "{{Event." + eventDefinitionKey + '."' + firstName + '"}}', },
      { lastName: "{{Event." + eventDefinitionKey + '."' + lastName + '"}}' },
      { opportunityId: "{{Event." + eventDefinitionKey + '."' + opportunityId + '"}}', },
      { stageName: "{{Event." + eventDefinitionKey + '."' + stageName + '"}}' },
      { courseOfStudyLookup: "{{Event." + eventDefinitionKey + '."' + courseOfStudyLookup + '"}}' },
      { isPrimary: "{{Event." + eventDefinitionKey + '."' + isPrimary + '"}}' },
      { programFamily: "{{Event." + eventDefinitionKey + '."' + programFamily + '"}}', },
      { cpAccountId: "{{Event." + eventDefinitionKey + '."' + cpAccountId + '"}}', },
      { salutation: "{{Event." + eventDefinitionKey + '."' + salutation + '"}}', },
      { productName: "{{Event." + eventDefinitionKey + '."' + productName + '"}}', },
      { productFamily: "{{Event." + eventDefinitionKey + '."' + productFamily + '"}}', },
      { productId: "{{Event." + eventDefinitionKey + '."' + productId + '"}}' },
      { degree: "{{Event." + eventDefinitionKey + '."' + degree + '"}}' },
      { createdDate: "{{Event." + eventDefinitionKey + '."' + createdDate + '"}}', },
      { optIn: "{{Event." + eventDefinitionKey + '."' + optIn + '"}}' },
      { personEmail: "{{Event." + eventDefinitionKey + '."' + personEmail + '"}}' },
      { country: "{{Event." + eventDefinitionKey + '."' + country + '"}}' },
      { voucher: "{{Event." + eventDefinitionKey + '."' + voucher + '"}}' },
      { englishLevel: "{{Event." + eventDefinitionKey + '."' + englishLevel + '"}}' },
      { workExperience: "{{Event." + eventDefinitionKey + '."' + workExperience + '"}}', },
      { budget: "{{Event." + eventDefinitionKey + '."' + budget + '"}}' },
      { rate: "{{Event." + eventDefinitionKey + '."' + rate + '"}}' },
      { studyAdvisor: "{{Event." + eventDefinitionKey + '."' + studyAdvisor + '"}}', },
      { phone: "{{Event." + eventDefinitionKey + '."' + phone + '"}}', },
      { migrationUser: "{{Event." + eventDefinitionKey + '."' + migrationUser + '"}}', },
      { migrationUserId: "{{Event." + eventDefinitionKey + '."' + migrationUserId + '"}}', },
      { contactId: "{{Contact.Key}}" },
      { domain: domain },
      { journeyName: journeyName },
      { edk: eventDefinitionKey },
      { entryTitle: entryTitle },
      { selectEntryObject: selectEntryObject },
      { obwKey: "{{Event." + eventDefinitionKey + '."' + obwKey + '"}}' },
    ];

    payload["metaData"].isConfigured = true;

    console.log("Payload: " + JSON.stringify(payload));
    connection.trigger("updateActivity", payload);
  }

  function getURL() {
    console.log("getURL: " + $("#url").val());
    return $("#url").val().trim();
  }

  function getDomain() {
    console.log("getDomain: " + $("#domain").val());
    return $("#domain").val().trim();
  }

  function getcontentJSON() {
    console.log("getcontentJSON: " + $("#payload").val());
    return $("#payload").val().trim();
  }

  function getEntryObject() {
    console.log("EntryObject: " + $("#entryObject").val());
    return $("#entryObject").val().trim();
  }
});
