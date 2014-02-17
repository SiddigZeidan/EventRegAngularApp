'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
		$scope.snippet = "<span style = 'color:red'> Hi There</span>";
		$scope.sortorder= "name";
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
					address: 'Google HQ',
					city: 'Mountain View',
					provience: 'CA'
			},
			sessions: [

					{
						name: 'Directives Masterclass',
						creatorName: 'Bob Smith',
						upVoteCount: 0
					},
					{
						name: 'Scopes for fun and profit',
						creatorName: 'Bob Smith',
						upVoteCount: 0
					},
					{
						name: 'Well Behaved Controllers',
						creatorName: 'Bob Smith',
						upVoteCount: 0
					}

			]
		}
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		}
			$scope.downVoteSession = function(session){
			session.upVoteCount--;
		}
	}
	);