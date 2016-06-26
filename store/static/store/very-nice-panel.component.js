angular.module("store").component('veryNicePanel', {
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{$ctrl.title}}</h3>
            </div>
            <div class="panel-body">
                <p>
                   {{$ctrl.content}}
                </p>
            </div>
        </div>
    `,
    bindings: {
        title: '=',
        content: '=',
    }
});
