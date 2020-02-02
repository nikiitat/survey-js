const {ignore, suite} = require('selenium-webdriver/testing');
const SurveyPage = require('./surveyPage')
assert = require('assert')

let surveyPage;

describe('Survey suite', function () {
    this.timeout(80000);

    before(async function () {
        surveyPage = new SurveyPage();
        await surveyPage.setupConfig();
        await surveyPage.navigateTo('https://surveyinterface-v2.opinionsample.com/#/surveys/ab320070-bbad-0134-bb62-0a6b3886cf3d/screens/page_1?publisher_user_id=07b59010-86d2-0131-c9a9-0a424708edaa&panel_user_id=PANEL_USER_TEST_22fd1640-d94b-0137-0d5b-029188bc54b8&panel_user_id_kind=PANEL_USER_KIND_TEST&pparam_offer_click_id=OFFER_CLICK_TEST_22fd1640-d94b-0137-0d5b-029188bc54b8&pparam_provider_user_id=%5Bprovider_user_uuid%5D&is_test&survey_id=ab320070-bbad-0134-bb62-0a6b3886cf3d&screen_id=page_1');
    });

    it('Opening a survey and the flow of answering questions.', async function () {
        assert.equal(await surveyPage.webPageIsDisplayed(), true, 'Web page is not displayed');

        assert.equal(await surveyPage.optInCheckBox(), true, 'CheckBox is not displayed');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 1');

        assert.equal(await surveyPage.questionPageIsDisplayed(2), true, 'Page 2 with question is not displayed');
        assert.equal(await surveyPage.selectAnswerOnPage(1, 2), true, 'Can not select answer 1 on page 2');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 2');

        assert.equal(await surveyPage.questionPageIsDisplayed(3), true, 'Page 3 with question is not displayed');
        assert.equal(await surveyPage.selectAnswerOnPage(2, 3), true, 'Can not select answer 2 on page 3');
        assert.equal(await surveyPage.selectAnswerOnPage(3, 3), true, 'Can not select answer 3 on page 3');
        // Uncomment below to make test pass!!
        assert.equal(await surveyPage.selectAnswerOnPage(1, 3), true, 'Can not select answer 1 on page 3');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 3');

        assert.equal(await surveyPage.questionPageIsDisplayed(4), true, 'Page 4 with question is not displayed');
        assert.equal(await surveyPage.selectAnswerOnPage(1, 4), true, 'Can not select answer 4 on page 3');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 4');

        assert.equal(await surveyPage.questionPageIsDisplayed(5), true, 'Page 5 with question is not displayed');
        assert.equal(await surveyPage.writeAnswerOnPage('asdsadas', 5), true, 'Can not write answer \'asdsada\' on page 5');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 5');

        assert.equal(await surveyPage.questionPageIsDisplayed(6), true, 'Page 6 with question is not displayed');
        assert.equal(await surveyPage.selectAnswerOnPage(1, 6), true, 'Can not select answer 1 on page 6');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 6');

        assert.equal(await surveyPage.questionPageIsDisplayed(7), true, 'Page 7 with question is not displayed');
        assert.equal(await surveyPage.writeAnswerOnPage(7, 7), true, 'Can not write answer \'7\' on page 7');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 7');

        assert.equal(await surveyPage.questionPageIsDisplayed(8), true, 'Page 8 with question is not displayed');
        assert.equal(await surveyPage.selectAnswerOnPage(2, 8), true, 'Can not select answer 2 on page 8');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 8');

        assert.equal(await surveyPage.questionPageIsDisplayed(9), true, 'Page 9 with question is not displayed');
        assert.equal(await surveyPage.selectAnswerOn9thPage('The Godfather'), true, 'Can not select answer \'The Godfather\' on page 9');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 9');

        assert.equal(await surveyPage.questionPageIsDisplayed('10a'), true, 'Page 10 with question is not displayed');
        assert.equal(await surveyPage.selectAnswerOnPage(1, '10a'), true, 'Can not select answer 1 on page 10');
        assert.equal(await surveyPage.goToNextPage(), true, 'Next Button is not displayed on page 10');

        assert.equal(await surveyPage.allDonePage(), true, 'All done! page is not displayed');
    });

    after(async function () {
        await surveyPage.closeBrowser();
    })
});