const social = '123-45-6789';

(function(app, social) {
    ssn = social;

    app.showLastFour = function() {
        console.log(`***-**-${ssn.substring(ssn.length - 4)}`);
    };

    app.Family = class {
        constructor(name, isPet) {
            this.name = name;
            this.isPet = isPet;
        }

        displayMember = () => `Name: ${this.name}, Pet: ${this.isPet}.`;
    }
})(window.app = window.app || {}, social);

const familyMembers = [
    new app.Family('Josh', false),
    new app.Family('Andy', true)
];

for (const f of familyMembers) {
    console.log(f.displayMember());
}

app.showLastFour();