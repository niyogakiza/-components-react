export function selectTutorial(tutorial) {
    return {
        type: 'TUTORIAL_SELECTED',
        payload: tutorial
    }
}