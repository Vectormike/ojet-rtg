/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojchart'],
 function(oj, ko, $) {

    function IncidentsViewModel() {
      var self = this;

      var api1 = [
        {
          name: "JavaScript",
          items: [62]
        },
        {
          name: "Python",
          items: [40]
        },
        {
          name: "PHP",
          items: [50]
        },
        {
          name: "C#",
          items: [30]
        },
        {
          name: "JAVA",
          items: [40]
        },
      ]



      var api2 = [
        {
          name: "Vscode",
          items: [72]
        },
        {
          name: "Sublime",
          items: [40]
        },
        {
          name: "Visual Studio",
          items: [50]
        },
        {
          name: "Atom",
          items: [30]
        },
        {
          name: "Netbeans",
          items: [20]
        },
      ]


      self.dataLang = ko.observableArray(api1);
      self.dataEditor = ko.observableArray(api2)

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);
