/**
 * sh_sdf_cl_example.js
 *
 * Example file to be imported into the SDF Project for Lesson 4 of the SuiteHub SDF Course
 *
 * @module sh_sdf_cl_example
 *
 * @copyright 2023 Salto
 * @author Eric T Grubaugh <eric@stoic.software>
 *
 * @NApiVersion 2.1
 * @NModuleScope Public
 * @NScriptType ClientScript
 */
define([], () => {
  /**
   * Display a thank you to the user
   *
   * @gov 0
   *
   * @param {Object} context
   *
   * @see [Help:pageInit]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410597671.html}
   */
  function pageInit(context) {
    console.info(`
***

THANK YOU for watching Lesson 4 of the Intro to SDF Course on SUITEHUB!"

***`);
  }

  return /** @alias module:sh_sdf_cl_example.js */ {
    pageInit
  };
});
