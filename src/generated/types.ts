export default {
    "scalars": [
        1,
        2,
        4,
        14,
        16,
        73,
        81,
        85,
        108,
        124,
        128,
        136,
        138,
        139,
        171,
        173,
        174,
        186,
        198,
        206,
        300,
        301,
        304,
        366,
        379,
        383,
        390,
        394,
        398,
        401,
        409,
        416,
        422,
        423,
        424,
        427,
        444,
        445,
        446,
        450,
        452,
        453,
        464,
        466,
        467,
        468,
        469,
        471,
        488,
        496,
        498,
        503,
        504,
        506,
        507,
        511,
        512,
        527,
        535,
        545,
        546,
        552,
        553,
        554,
        556,
        557,
        563,
        569,
        576,
        581,
        582,
        585,
        590,
        597,
        598,
        599,
        607,
        613,
        620,
        634,
        641,
        669,
        670,
        678,
        679,
        680,
        681,
        685,
        686,
        692,
        693,
        705,
        707,
        710,
        711,
        712,
        715,
        720,
        728,
        737,
        739,
        740,
        742,
        743,
        751,
        753,
        755,
        770,
        771,
        772,
        775,
        776,
        778,
        781,
        791,
        793,
        797,
        802,
        805,
        815,
        819,
        820,
        825,
        830,
        837,
        842,
        847,
        851,
        854,
        855,
        862,
        872,
        873,
        896,
        898,
        899,
        904,
        906,
        908,
        911,
        919,
        924,
        925,
        929,
        931,
        936,
        945,
        956,
        958,
        965,
        968,
        970,
        971,
        975,
        977,
        986,
        987,
        1000,
        1004,
        1015,
        1033,
        1070,
        1072,
        1075,
        1077,
        1089,
        1091,
        1093,
        1095,
        1097,
        1105,
        1113,
        1114,
        1115,
        1120,
        1121,
        1126,
        1127,
        1132,
        1134,
        1136,
        1146,
        1147,
        1150,
        1156,
        1160,
        1165,
        1167,
        1170,
        1205,
        1206,
        1210,
        1211,
        1216,
        1220,
        1222,
        1224,
        1228,
        1230,
        1234,
        1239,
        1252,
        1258,
        1262,
        1268,
        1270,
        1274,
        1275,
        1276,
        1278,
        1282,
        1288,
        1296,
        1298,
        1299,
        1300,
        1301,
        1302,
        1305,
        1324,
        1334,
        1350,
        1354,
        1359,
        1360,
        1361,
        1362,
        1364,
        1365,
        1371,
        1372,
        1373,
        1376,
        1377,
        1380,
        1381,
        1389,
        1555,
        1574,
        1579,
        1593,
        1594,
        1597
    ],
    "types": {
        "AbortQueuedMigrationsInput": {
            "clientMutationId": [
                1
            ],
            "ownerId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "ID": {},
        "AbortQueuedMigrationsPayload": {
            "clientMutationId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "AbortRepositoryMigrationInput": {
            "clientMutationId": [
                1
            ],
            "migrationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AbortRepositoryMigrationPayload": {
            "clientMutationId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AcceptEnterpriseAdministratorInvitationInput": {
            "clientMutationId": [
                1
            ],
            "invitationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AcceptEnterpriseAdministratorInvitationPayload": {
            "clientMutationId": [
                1
            ],
            "invitation": [
                440
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AcceptEnterpriseMemberInvitationInput": {
            "clientMutationId": [
                1
            ],
            "invitationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AcceptEnterpriseMemberInvitationPayload": {
            "clientMutationId": [
                1
            ],
            "invitation": [
                460
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AcceptTopicSuggestionInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AcceptTopicSuggestionPayload": {
            "clientMutationId": [
                1
            ],
            "topic": [
                1378
            ],
            "__typename": [
                1
            ]
        },
        "Actor": {
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "login": [
                1
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "on_Bot": [
                89
            ],
            "on_EnterpriseUserAccount": [
                505
            ],
            "on_Mannequin": [
                637
            ],
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "ActorLocation": {
            "city": [
                1
            ],
            "country": [
                1
            ],
            "countryCode": [
                1
            ],
            "region": [
                1
            ],
            "regionCode": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ActorType": {},
        "AddAssigneesToAssignableInput": {
            "assignableId": [
                2
            ],
            "assigneeIds": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AddAssigneesToAssignablePayload": {
            "assignable": [
                67
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AddCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddCommentPayload": {
            "clientMutationId": [
                1
            ],
            "commentEdge": [
                588
            ],
            "subject": [
                704
            ],
            "timelineEdge": [
                603
            ],
            "__typename": [
                1
            ]
        },
        "AddDiscussionCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "discussionId": [
                2
            ],
            "replyToId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddDiscussionCommentPayload": {
            "clientMutationId": [
                1
            ],
            "comment": [
                410
            ],
            "__typename": [
                1
            ]
        },
        "AddDiscussionPollVoteInput": {
            "clientMutationId": [
                1
            ],
            "pollOptionId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddDiscussionPollVotePayload": {
            "clientMutationId": [
                1
            ],
            "pollOption": [
                418
            ],
            "__typename": [
                1
            ]
        },
        "AddEnterpriseOrganizationMemberInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "organizationId": [
                2
            ],
            "role": [
                775
            ],
            "userIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddEnterpriseOrganizationMemberPayload": {
            "clientMutationId": [
                1
            ],
            "users": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "AddEnterpriseSupportEntitlementInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AddEnterpriseSupportEntitlementPayload": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AddLabelsToLabelableInput": {
            "clientMutationId": [
                1
            ],
            "labelIds": [
                2
            ],
            "labelableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddLabelsToLabelablePayload": {
            "clientMutationId": [
                1
            ],
            "labelable": [
                614
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectCardInput": {
            "clientMutationId": [
                1
            ],
            "contentId": [
                2
            ],
            "note": [
                1
            ],
            "projectColumnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectCardPayload": {
            "cardEdge": [
                839
            ],
            "clientMutationId": [
                1
            ],
            "projectColumn": [
                843
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectColumnInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectColumnPayload": {
            "clientMutationId": [
                1
            ],
            "columnEdge": [
                845
            ],
            "project": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectV2DraftIssueInput": {
            "assigneeIds": [
                2
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectV2DraftIssuePayload": {
            "clientMutationId": [
                1
            ],
            "projectItem": [
                876
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectV2ItemByIdInput": {
            "clientMutationId": [
                1
            ],
            "contentId": [
                2
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectV2ItemByIdPayload": {
            "clientMutationId": [
                1
            ],
            "item": [
                876
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "commitOID": [
                552
            ],
            "inReplyTo": [
                2
            ],
            "path": [
                1
            ],
            "position": [
                14
            ],
            "pullRequestId": [
                2
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewCommentPayload": {
            "clientMutationId": [
                1
            ],
            "comment": [
                962
            ],
            "commentEdge": [
                964
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "comments": [
                431
            ],
            "commitOID": [
                552
            ],
            "event": [
                970
            ],
            "pullRequestId": [
                2
            ],
            "threads": [
                432
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                961
            ],
            "reviewEdge": [
                969
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewThreadInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "line": [
                14
            ],
            "path": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "pullRequestReviewId": [
                2
            ],
            "side": [
                401
            ],
            "startLine": [
                14
            ],
            "startSide": [
                401
            ],
            "subjectType": [
                975
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewThreadPayload": {
            "clientMutationId": [
                1
            ],
            "thread": [
                972
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewThreadReplyInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "pullRequestReviewId": [
                2
            ],
            "pullRequestReviewThreadId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewThreadReplyPayload": {
            "clientMutationId": [
                1
            ],
            "comment": [
                962
            ],
            "__typename": [
                1
            ]
        },
        "AddReactionInput": {
            "clientMutationId": [
                1
            ],
            "content": [
                1000
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddReactionPayload": {
            "clientMutationId": [
                1
            ],
            "reaction": [
                998
            ],
            "reactionGroups": [
                1002
            ],
            "subject": [
                995
            ],
            "__typename": [
                1
            ]
        },
        "AddStarInput": {
            "clientMutationId": [
                1
            ],
            "starrableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddStarPayload": {
            "clientMutationId": [
                1
            ],
            "starrable": [
                1308
            ],
            "__typename": [
                1
            ]
        },
        "AddUpvoteInput": {
            "clientMutationId": [
                1
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddUpvotePayload": {
            "clientMutationId": [
                1
            ],
            "subject": [
                1584
            ],
            "__typename": [
                1
            ]
        },
        "AddVerifiableDomainInput": {
            "clientMutationId": [
                1
            ],
            "domain": [
                1389
            ],
            "ownerId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddVerifiableDomainPayload": {
            "clientMutationId": [
                1
            ],
            "domain": [
                1575
            ],
            "__typename": [
                1
            ]
        },
        "AddedToMergeQueueEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "enqueuer": [
                1554
            ],
            "id": [
                2
            ],
            "mergeQueue": [
                673
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "AddedToProjectEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "project": [
                835
            ],
            "projectCard": [
                836
            ],
            "projectColumnName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AnnouncementBanner": {
            "announcement": [
                1
            ],
            "announcementCreatedAt": [
                301
            ],
            "announcementExpiresAt": [
                301
            ],
            "announcementUserDismissible": [
                4
            ],
            "on_Enterprise": [
                437
            ],
            "on_Organization": [
                757
            ],
            "__typename": [
                1
            ]
        },
        "App": {
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "ipAllowListEntries": [
                578,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        580
                    ]
                }
            ],
            "logoBackgroundColor": [
                1
            ],
            "logoUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "name": [
                1
            ],
            "slug": [
                1
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "ApproveDeploymentsInput": {
            "clientMutationId": [
                1
            ],
            "comment": [
                1
            ],
            "environmentIds": [
                2
            ],
            "workflowRunId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ApproveDeploymentsPayload": {
            "clientMutationId": [
                1
            ],
            "deployments": [
                374
            ],
            "__typename": [
                1
            ]
        },
        "ApproveVerifiableDomainInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ApproveVerifiableDomainPayload": {
            "clientMutationId": [
                1
            ],
            "domain": [
                1575
            ],
            "__typename": [
                1
            ]
        },
        "ArchiveProjectV2ItemInput": {
            "clientMutationId": [
                1
            ],
            "itemId": [
                2
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ArchiveProjectV2ItemPayload": {
            "clientMutationId": [
                1
            ],
            "item": [
                876
            ],
            "__typename": [
                1
            ]
        },
        "ArchiveRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ArchiveRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "Assignable": {
            "assignees": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "AssignedEvent": {
            "actor": [
                13
            ],
            "assignable": [
                67
            ],
            "assignee": [
                69
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "Assignee": {
            "on_Bot": [
                89
            ],
            "on_Mannequin": [
                637
            ],
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "on_Actor": [
                13
            ],
            "on_Node": [
                704
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "__typename": [
                1
            ]
        },
        "AuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "operationType": [
                711
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                663
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                664
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                665
            ],
            "on_OauthApplicationCreateAuditEntry": [
                709
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                713
            ],
            "on_OrgAddMemberAuditEntry": [
                714
            ],
            "on_OrgBlockUserAuditEntry": [
                716
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                717
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                718
            ],
            "on_OrgCreateAuditEntry": [
                719
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                721
            ],
            "on_OrgDisableSamlAuditEntry": [
                722
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                723
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                724
            ],
            "on_OrgEnableSamlAuditEntry": [
                725
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                726
            ],
            "on_OrgInviteMemberAuditEntry": [
                729
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                730
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                731
            ],
            "on_OrgOauthAppAccessBlockedAuditEntry": [
                732
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                733
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                734
            ],
            "on_OrgOauthAppAccessUnblockedAuditEntry": [
                735
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                736
            ],
            "on_OrgRemoveMemberAuditEntry": [
                738
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                741
            ],
            "on_OrgRestoreMemberAuditEntry": [
                744
            ],
            "on_OrgUnblockUserAuditEntry": [
                749
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                750
            ],
            "on_OrgUpdateMemberAuditEntry": [
                752
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                754
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                756
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                831
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                832
            ],
            "on_RepoAccessAuditEntry": [
                1069
            ],
            "on_RepoAddMemberAuditEntry": [
                1071
            ],
            "on_RepoAddTopicAuditEntry": [
                1073
            ],
            "on_RepoArchivedAuditEntry": [
                1074
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                1076
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                1078
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                1079
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                1080
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                1081
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                1082
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                1083
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                1084
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                1085
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                1086
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                1087
            ],
            "on_RepoCreateAuditEntry": [
                1088
            ],
            "on_RepoDestroyAuditEntry": [
                1090
            ],
            "on_RepoRemoveMemberAuditEntry": [
                1092
            ],
            "on_RepoRemoveTopicAuditEntry": [
                1094
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                1161
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                1162
            ],
            "on_TeamAddMemberAuditEntry": [
                1340
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1341
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1343
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1366
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1367
            ],
            "__typename": [
                1
            ]
        },
        "AuditEntryActor": {
            "on_Bot": [
                89
            ],
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "on_Actor": [
                13
            ],
            "on_Node": [
                704
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "__typename": [
                1
            ]
        },
        "AuditLogOrder": {
            "direction": [
                712
            ],
            "field": [
                73
            ],
            "__typename": [
                1
            ]
        },
        "AuditLogOrderField": {},
        "AutoMergeDisabledEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "disabler": [
                1554
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "reason": [
                1
            ],
            "reasonCode": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AutoMergeEnabledEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "enabler": [
                1554
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "AutoMergeRequest": {
            "authorEmail": [
                1
            ],
            "commitBody": [
                1
            ],
            "commitHeadline": [
                1
            ],
            "enabledAt": [
                301
            ],
            "enabledBy": [
                13
            ],
            "mergeMethod": [
                956
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "AutoRebaseEnabledEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "enabler": [
                1554
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "AutoSquashEnabledEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "enabler": [
                1554
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticBaseChangeFailedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "newBase": [
                1
            ],
            "oldBase": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticBaseChangeSucceededEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "newBase": [
                1
            ],
            "oldBase": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "Base64String": {},
        "BaseRefChangedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "currentRefName": [
                1
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "previousRefName": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "BaseRefDeletedEvent": {
            "actor": [
                13
            ],
            "baseRefName": [
                1
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "BaseRefForcePushedEvent": {
            "actor": [
                13
            ],
            "afterCommit": [
                176
            ],
            "beforeCommit": [
                176
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "ref": [
                1009
            ],
            "__typename": [
                1
            ]
        },
        "BigInt": {},
        "Blame": {
            "ranges": [
                87
            ],
            "__typename": [
                1
            ]
        },
        "BlameRange": {
            "age": [
                14
            ],
            "commit": [
                176
            ],
            "endingLine": [
                14
            ],
            "startingLine": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "Blob": {
            "abbreviatedOid": [
                1
            ],
            "byteSize": [
                14
            ],
            "commitResourcePath": [
                1389
            ],
            "commitUrl": [
                1389
            ],
            "id": [
                2
            ],
            "isBinary": [
                4
            ],
            "isTruncated": [
                4
            ],
            "oid": [
                552
            ],
            "repository": [
                1096
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Bot": {
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "login": [
                1
            ],
            "resourcePath": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "BranchActorAllowanceActor": {
            "on_App": [
                58
            ],
            "on_Team": [
                1339
            ],
            "on_User": [
                1554
            ],
            "on_Node": [
                704
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Subscribable": [
                1331
            ],
            "on_Actor": [
                13
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "BranchNamePatternParameters": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BranchNamePatternParametersInput": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRule": {
            "allowsDeletions": [
                4
            ],
            "allowsForcePushes": [
                4
            ],
            "blocksCreations": [
                4
            ],
            "branchProtectionRuleConflicts": [
                95,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "bypassForcePushAllowances": [
                102,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "bypassPullRequestAllowances": [
                105,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "dismissesStaleReviews": [
                4
            ],
            "id": [
                2
            ],
            "isAdminEnforced": [
                4
            ],
            "lockAllowsFetchAndMerge": [
                4
            ],
            "lockBranch": [
                4
            ],
            "matchingRefs": [
                1010,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "pattern": [
                1
            ],
            "pushAllowances": [
                991,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "requireLastPushApproval": [
                4
            ],
            "requiredApprovingReviewCount": [
                14
            ],
            "requiredDeploymentEnvironments": [
                1
            ],
            "requiredStatusCheckContexts": [
                1
            ],
            "requiredStatusChecks": [
                1177
            ],
            "requiresApprovingReviews": [
                4
            ],
            "requiresCodeOwnerReviews": [
                4
            ],
            "requiresCommitSignatures": [
                4
            ],
            "requiresConversationResolution": [
                4
            ],
            "requiresDeployments": [
                4
            ],
            "requiresLinearHistory": [
                4
            ],
            "requiresStatusChecks": [
                4
            ],
            "requiresStrictStatusChecks": [
                4
            ],
            "restrictsPushes": [
                4
            ],
            "restrictsReviewDismissals": [
                4
            ],
            "reviewDismissalAllowances": [
                1192,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleConflict": {
            "branchProtectionRule": [
                93
            ],
            "conflictingBranchProtectionRule": [
                93
            ],
            "ref": [
                1009
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleConflictConnection": {
            "edges": [
                96
            ],
            "nodes": [
                94
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleConflictEdge": {
            "cursor": [
                1
            ],
            "node": [
                94
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleConnection": {
            "edges": [
                98
            ],
            "nodes": [
                93
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleEdge": {
            "cursor": [
                1
            ],
            "node": [
                93
            ],
            "__typename": [
                1
            ]
        },
        "BulkSponsorship": {
            "amount": [
                14
            ],
            "sponsorableId": [
                2
            ],
            "sponsorableLogin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BypassActor": {
            "on_App": [
                58
            ],
            "on_Team": [
                1339
            ],
            "on_Node": [
                704
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Subscribable": [
                1331
            ],
            "__typename": [
                1
            ]
        },
        "BypassForcePushAllowance": {
            "actor": [
                90
            ],
            "branchProtectionRule": [
                93
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "BypassForcePushAllowanceConnection": {
            "edges": [
                103
            ],
            "nodes": [
                101
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "BypassForcePushAllowanceEdge": {
            "cursor": [
                1
            ],
            "node": [
                101
            ],
            "__typename": [
                1
            ]
        },
        "BypassPullRequestAllowance": {
            "actor": [
                90
            ],
            "branchProtectionRule": [
                93
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "BypassPullRequestAllowanceConnection": {
            "edges": [
                106
            ],
            "nodes": [
                104
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "BypassPullRequestAllowanceEdge": {
            "cursor": [
                1
            ],
            "node": [
                104
            ],
            "__typename": [
                1
            ]
        },
        "CVSS": {
            "score": [
                108
            ],
            "vectorString": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Float": {},
        "CWE": {
            "cweId": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CWEConnection": {
            "edges": [
                111
            ],
            "nodes": [
                109
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CWEEdge": {
            "cursor": [
                1
            ],
            "node": [
                109
            ],
            "__typename": [
                1
            ]
        },
        "CancelEnterpriseAdminInvitationInput": {
            "clientMutationId": [
                1
            ],
            "invitationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CancelEnterpriseAdminInvitationPayload": {
            "clientMutationId": [
                1
            ],
            "invitation": [
                440
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CancelEnterpriseMemberInvitationInput": {
            "clientMutationId": [
                1
            ],
            "invitationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CancelEnterpriseMemberInvitationPayload": {
            "clientMutationId": [
                1
            ],
            "invitation": [
                460
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CancelSponsorshipInput": {
            "clientMutationId": [
                1
            ],
            "sponsorId": [
                2
            ],
            "sponsorLogin": [
                1
            ],
            "sponsorableId": [
                2
            ],
            "sponsorableLogin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CancelSponsorshipPayload": {
            "clientMutationId": [
                1
            ],
            "sponsorsTier": [
                1283
            ],
            "__typename": [
                1
            ]
        },
        "ChangeUserStatusInput": {
            "clientMutationId": [
                1
            ],
            "emoji": [
                1
            ],
            "expiresAt": [
                301
            ],
            "limitedAvailability": [
                4
            ],
            "message": [
                1
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ChangeUserStatusPayload": {
            "clientMutationId": [
                1
            ],
            "status": [
                1570
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotation": {
            "annotationLevel": [
                124
            ],
            "blobUrl": [
                1389
            ],
            "databaseId": [
                14
            ],
            "location": [
                127
            ],
            "message": [
                1
            ],
            "path": [
                1
            ],
            "rawDetails": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationConnection": {
            "edges": [
                123
            ],
            "nodes": [
                120
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationData": {
            "annotationLevel": [
                124
            ],
            "location": [
                126
            ],
            "message": [
                1
            ],
            "path": [
                1
            ],
            "rawDetails": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationEdge": {
            "cursor": [
                1
            ],
            "node": [
                120
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationLevel": {},
        "CheckAnnotationPosition": {
            "column": [
                14
            ],
            "line": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationRange": {
            "endColumn": [
                14
            ],
            "endLine": [
                14
            ],
            "startColumn": [
                14
            ],
            "startLine": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationSpan": {
            "end": [
                125
            ],
            "start": [
                125
            ],
            "__typename": [
                1
            ]
        },
        "CheckConclusionState": {},
        "CheckRun": {
            "annotations": [
                121,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "checkSuite": [
                143
            ],
            "completedAt": [
                301
            ],
            "conclusion": [
                128
            ],
            "databaseId": [
                14
            ],
            "deployment": [
                374
            ],
            "detailsUrl": [
                1389
            ],
            "externalId": [
                1
            ],
            "id": [
                2
            ],
            "isRequired": [
                4,
                {
                    "pullRequestId": [
                        2
                    ],
                    "pullRequestNumber": [
                        14
                    ]
                }
            ],
            "name": [
                1
            ],
            "pendingDeploymentRequest": [
                384
            ],
            "permalink": [
                1389
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "startedAt": [
                301
            ],
            "status": [
                139
            ],
            "steps": [
                141,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "number": [
                        14
                    ]
                }
            ],
            "summary": [
                1
            ],
            "text": [
                1
            ],
            "title": [
                1
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunAction": {
            "description": [
                1
            ],
            "identifier": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunConnection": {
            "edges": [
                132
            ],
            "nodes": [
                129
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunEdge": {
            "cursor": [
                1
            ],
            "node": [
                129
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunFilter": {
            "appId": [
                14
            ],
            "checkName": [
                1
            ],
            "checkType": [
                138
            ],
            "conclusions": [
                128
            ],
            "status": [
                139
            ],
            "statuses": [
                139
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunOutput": {
            "annotations": [
                122
            ],
            "images": [
                135
            ],
            "summary": [
                1
            ],
            "text": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunOutputImage": {
            "alt": [
                1
            ],
            "caption": [
                1
            ],
            "imageUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunState": {},
        "CheckRunStateCount": {
            "count": [
                14
            ],
            "state": [
                136
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunType": {},
        "CheckStatusState": {},
        "CheckStep": {
            "completedAt": [
                301
            ],
            "conclusion": [
                128
            ],
            "externalId": [
                1
            ],
            "name": [
                1
            ],
            "number": [
                14
            ],
            "secondsToCompletion": [
                14
            ],
            "startedAt": [
                301
            ],
            "status": [
                139
            ],
            "__typename": [
                1
            ]
        },
        "CheckStepConnection": {
            "edges": [
                142
            ],
            "nodes": [
                140
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CheckStepEdge": {
            "cursor": [
                1
            ],
            "node": [
                140
            ],
            "__typename": [
                1
            ]
        },
        "CheckSuite": {
            "app": [
                58
            ],
            "branch": [
                1009
            ],
            "checkRuns": [
                131,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        133
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "commit": [
                176
            ],
            "conclusion": [
                128
            ],
            "createdAt": [
                301
            ],
            "creator": [
                1554
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "matchingPullRequests": [
                953,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        977,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "push": [
                988
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "status": [
                139
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "workflowRun": [
                1588
            ],
            "__typename": [
                1
            ]
        },
        "CheckSuiteAutoTriggerPreference": {
            "appId": [
                2
            ],
            "setting": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CheckSuiteConnection": {
            "edges": [
                146
            ],
            "nodes": [
                143
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CheckSuiteEdge": {
            "cursor": [
                1
            ],
            "node": [
                143
            ],
            "__typename": [
                1
            ]
        },
        "CheckSuiteFilter": {
            "appId": [
                14
            ],
            "checkName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Claimable": {
            "on_Mannequin": [
                637
            ],
            "on_User": [
                1554
            ],
            "on_Actor": [
                13
            ],
            "on_Node": [
                704
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "__typename": [
                1
            ]
        },
        "ClearLabelsFromLabelableInput": {
            "clientMutationId": [
                1
            ],
            "labelableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ClearLabelsFromLabelablePayload": {
            "clientMutationId": [
                1
            ],
            "labelable": [
                614
            ],
            "__typename": [
                1
            ]
        },
        "ClearProjectV2ItemFieldValueInput": {
            "clientMutationId": [
                1
            ],
            "fieldId": [
                2
            ],
            "itemId": [
                2
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ClearProjectV2ItemFieldValuePayload": {
            "clientMutationId": [
                1
            ],
            "projectV2Item": [
                876
            ],
            "__typename": [
                1
            ]
        },
        "CloneProjectInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "includeWorkflows": [
                4
            ],
            "name": [
                1
            ],
            "public": [
                4
            ],
            "sourceId": [
                2
            ],
            "targetOwnerId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CloneProjectPayload": {
            "clientMutationId": [
                1
            ],
            "jobStatusId": [
                1
            ],
            "project": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "CloneTemplateRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "includeAllBranches": [
                4
            ],
            "name": [
                1
            ],
            "ownerId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "visibility": [
                1160
            ],
            "__typename": [
                1
            ]
        },
        "CloneTemplateRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "Closable": {
            "closed": [
                4
            ],
            "closedAt": [
                301
            ],
            "viewerCanClose": [
                4
            ],
            "viewerCanReopen": [
                4
            ],
            "on_Discussion": [
                405
            ],
            "on_Issue": [
                584
            ],
            "on_Milestone": [
                687
            ],
            "on_Project": [
                835
            ],
            "on_ProjectV2": [
                856
            ],
            "on_PullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "CloseDiscussionInput": {
            "clientMutationId": [
                1
            ],
            "discussionId": [
                2
            ],
            "reason": [
                409
            ],
            "__typename": [
                1
            ]
        },
        "CloseDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "discussion": [
                405
            ],
            "__typename": [
                1
            ]
        },
        "CloseIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "stateReason": [
                585
            ],
            "__typename": [
                1
            ]
        },
        "CloseIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "ClosePullRequestInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ClosePullRequestPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "ClosedEvent": {
            "actor": [
                13
            ],
            "closable": [
                157
            ],
            "closer": [
                165
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "resourcePath": [
                1389
            ],
            "stateReason": [
                599
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "Closer": {
            "on_Commit": [
                176
            ],
            "on_ProjectV2": [
                856
            ],
            "on_PullRequest": [
                944
            ],
            "on_GitObject": [
                551
            ],
            "on_Node": [
                704
            ],
            "on_Subscribable": [
                1331
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Closable": [
                157
            ],
            "on_Updatable": [
                1430
            ],
            "on_Assignable": [
                67
            ],
            "on_Comment": [
                172
            ],
            "on_Labelable": [
                614
            ],
            "on_Lockable": [
                635
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "CodeOfConduct": {
            "body": [
                1
            ],
            "id": [
                2
            ],
            "key": [
                1
            ],
            "name": [
                1
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "CodeScanningParameters": {
            "codeScanningTools": [
                169
            ],
            "__typename": [
                1
            ]
        },
        "CodeScanningParametersInput": {
            "codeScanningTools": [
                170
            ],
            "__typename": [
                1
            ]
        },
        "CodeScanningTool": {
            "alertsThreshold": [
                1
            ],
            "securityAlertsThreshold": [
                1
            ],
            "tool": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CodeScanningToolInput": {
            "alertsThreshold": [
                1
            ],
            "securityAlertsThreshold": [
                1
            ],
            "tool": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CollaboratorAffiliation": {},
        "Comment": {
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "editor": [
                13
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "lastEditedAt": [
                301
            ],
            "publishedAt": [
                301
            ],
            "updatedAt": [
                301
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerDidAuthor": [
                4
            ],
            "on_CommitComment": [
                180
            ],
            "on_Discussion": [
                405
            ],
            "on_DiscussionComment": [
                410
            ],
            "on_GistComment": [
                538
            ],
            "on_Issue": [
                584
            ],
            "on_IssueComment": [
                586
            ],
            "on_PullRequest": [
                944
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewComment": [
                962
            ],
            "on_TeamDiscussion": [
                1345
            ],
            "on_TeamDiscussionComment": [
                1346
            ],
            "__typename": [
                1
            ]
        },
        "CommentAuthorAssociation": {},
        "CommentCannotUpdateReason": {},
        "CommentDeletedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "deletedCommentAuthor": [
                13
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "Commit": {
            "abbreviatedOid": [
                1
            ],
            "additions": [
                14
            ],
            "associatedPullRequests": [
                953,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        957
                    ]
                }
            ],
            "author": [
                547
            ],
            "authoredByCommitter": [
                4
            ],
            "authoredDate": [
                301
            ],
            "authors": [
                548,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "blame": [
                86,
                {
                    "path": [
                        1,
                        "String!"
                    ]
                }
            ],
            "changedFiles": [
                14
            ],
            "changedFilesIfAvailable": [
                14
            ],
            "checkSuites": [
                145,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        147
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "comments": [
                181,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "commitResourcePath": [
                1389
            ],
            "commitUrl": [
                1389
            ],
            "committedDate": [
                301
            ],
            "committedViaWeb": [
                4
            ],
            "committer": [
                547
            ],
            "deletions": [
                14
            ],
            "deployments": [
                375,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "environments": [
                        1,
                        "[String!]"
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        378
                    ]
                }
            ],
            "file": [
                1388,
                {
                    "path": [
                        1,
                        "String!"
                    ]
                }
            ],
            "history": [
                189,
                {
                    "after": [
                        1
                    ],
                    "author": [
                        177
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "path": [
                        1
                    ],
                    "since": [
                        557
                    ],
                    "until": [
                        557
                    ]
                }
            ],
            "id": [
                2
            ],
            "message": [
                1
            ],
            "messageBody": [
                1
            ],
            "messageBodyHTML": [
                563
            ],
            "messageHeadline": [
                1
            ],
            "messageHeadlineHTML": [
                563
            ],
            "oid": [
                552
            ],
            "onBehalfOf": [
                757
            ],
            "parents": [
                184,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "pushedDate": [
                301
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "signature": [
                555
            ],
            "status": [
                1315
            ],
            "statusCheckRollup": [
                1318
            ],
            "submodules": [
                1329,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "tarballUrl": [
                1389
            ],
            "tree": [
                1387
            ],
            "treeResourcePath": [
                1389
            ],
            "treeUrl": [
                1389
            ],
            "url": [
                1389
            ],
            "viewerCanSubscribe": [
                4
            ],
            "viewerSubscription": [
                1334
            ],
            "zipballUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "CommitAuthor": {
            "emails": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CommitAuthorEmailPatternParameters": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommitAuthorEmailPatternParametersInput": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommitComment": {
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "commit": [
                176
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "editor": [
                13
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isMinimized": [
                4
            ],
            "lastEditedAt": [
                301
            ],
            "minimizedReason": [
                1
            ],
            "path": [
                1
            ],
            "position": [
                14
            ],
            "publishedAt": [
                301
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanMinimize": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CommitCommentConnection": {
            "edges": [
                182
            ],
            "nodes": [
                180
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CommitCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "CommitCommentThread": {
            "comments": [
                181,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "commit": [
                176
            ],
            "id": [
                2
            ],
            "path": [
                1
            ],
            "position": [
                14
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "CommitConnection": {
            "edges": [
                188
            ],
            "nodes": [
                176
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CommitContributionOrder": {
            "direction": [
                712
            ],
            "field": [
                186
            ],
            "__typename": [
                1
            ]
        },
        "CommitContributionOrderField": {},
        "CommitContributionsByRepository": {
            "contributions": [
                282,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        185
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "CommitEdge": {
            "cursor": [
                1
            ],
            "node": [
                176
            ],
            "__typename": [
                1
            ]
        },
        "CommitHistoryConnection": {
            "edges": [
                188
            ],
            "nodes": [
                176
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CommitMessage": {
            "body": [
                1
            ],
            "headline": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommitMessagePatternParameters": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommitMessagePatternParametersInput": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommittableBranch": {
            "branchName": [
                1
            ],
            "id": [
                2
            ],
            "repositoryNameWithOwner": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommitterEmailPatternParameters": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommitterEmailPatternParametersInput": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Comparison": {
            "aheadBy": [
                14
            ],
            "baseTarget": [
                551
            ],
            "behindBy": [
                14
            ],
            "commits": [
                197,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "headTarget": [
                551
            ],
            "id": [
                2
            ],
            "status": [
                198
            ],
            "__typename": [
                1
            ]
        },
        "ComparisonCommitConnection": {
            "authorCount": [
                14
            ],
            "edges": [
                188
            ],
            "nodes": [
                176
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ComparisonStatus": {},
        "ConnectedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                4
            ],
            "source": [
                1019
            ],
            "subject": [
                1019
            ],
            "__typename": [
                1
            ]
        },
        "ContributingGuidelines": {
            "body": [
                1
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "Contribution": {
            "isRestricted": [
                4
            ],
            "occurredAt": [
                301
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "user": [
                1554
            ],
            "on_CreatedCommitContribution": [
                281
            ],
            "on_CreatedIssueContribution": [
                284
            ],
            "on_CreatedPullRequestContribution": [
                288
            ],
            "on_CreatedPullRequestReviewContribution": [
                292
            ],
            "on_CreatedRepositoryContribution": [
                295
            ],
            "on_JoinedGitHubContribution": [
                608
            ],
            "on_RestrictedContribution": [
                1185
            ],
            "__typename": [
                1
            ]
        },
        "ContributionCalendar": {
            "colors": [
                1
            ],
            "isHalloween": [
                4
            ],
            "months": [
                204
            ],
            "totalContributions": [
                14
            ],
            "weeks": [
                205
            ],
            "__typename": [
                1
            ]
        },
        "ContributionCalendarDay": {
            "color": [
                1
            ],
            "contributionCount": [
                14
            ],
            "contributionLevel": [
                206
            ],
            "date": [
                300
            ],
            "weekday": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ContributionCalendarMonth": {
            "firstDay": [
                300
            ],
            "name": [
                1
            ],
            "totalWeeks": [
                14
            ],
            "year": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ContributionCalendarWeek": {
            "contributionDays": [
                203
            ],
            "firstDay": [
                300
            ],
            "__typename": [
                1
            ]
        },
        "ContributionLevel": {},
        "ContributionOrder": {
            "direction": [
                712
            ],
            "__typename": [
                1
            ]
        },
        "ContributionsCollection": {
            "commitContributionsByRepository": [
                187,
                {
                    "maxRepositories": [
                        14
                    ]
                }
            ],
            "contributionCalendar": [
                202
            ],
            "contributionYears": [
                14
            ],
            "doesEndInCurrentMonth": [
                4
            ],
            "earliestRestrictedContributionDate": [
                300
            ],
            "endedAt": [
                301
            ],
            "firstIssueContribution": [
                287
            ],
            "firstPullRequestContribution": [
                291
            ],
            "firstRepositoryContribution": [
                298
            ],
            "hasActivityInThePast": [
                4
            ],
            "hasAnyContributions": [
                4
            ],
            "hasAnyRestrictedContributions": [
                4
            ],
            "isSingleDay": [
                4
            ],
            "issueContributions": [
                285,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "excludeFirst": [
                        4
                    ],
                    "excludePopular": [
                        4
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        207
                    ]
                }
            ],
            "issueContributionsByRepository": [
                592,
                {
                    "excludeFirst": [
                        4
                    ],
                    "excludePopular": [
                        4
                    ],
                    "maxRepositories": [
                        14
                    ]
                }
            ],
            "joinedGitHubContribution": [
                608
            ],
            "latestRestrictedContributionDate": [
                300
            ],
            "mostRecentCollectionWithActivity": [
                208
            ],
            "mostRecentCollectionWithoutActivity": [
                208
            ],
            "popularIssueContribution": [
                284
            ],
            "popularPullRequestContribution": [
                288
            ],
            "pullRequestContributions": [
                289,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "excludeFirst": [
                        4
                    ],
                    "excludePopular": [
                        4
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        207
                    ]
                }
            ],
            "pullRequestContributionsByRepository": [
                954,
                {
                    "excludeFirst": [
                        4
                    ],
                    "excludePopular": [
                        4
                    ],
                    "maxRepositories": [
                        14
                    ]
                }
            ],
            "pullRequestReviewContributions": [
                293,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        207
                    ]
                }
            ],
            "pullRequestReviewContributionsByRepository": [
                967,
                {
                    "maxRepositories": [
                        14
                    ]
                }
            ],
            "repositoryContributions": [
                296,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "excludeFirst": [
                        4
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        207
                    ]
                }
            ],
            "restrictedContributionsCount": [
                14
            ],
            "startedAt": [
                301
            ],
            "totalCommitContributions": [
                14
            ],
            "totalIssueContributions": [
                14,
                {
                    "excludeFirst": [
                        4
                    ],
                    "excludePopular": [
                        4
                    ]
                }
            ],
            "totalPullRequestContributions": [
                14,
                {
                    "excludeFirst": [
                        4
                    ],
                    "excludePopular": [
                        4
                    ]
                }
            ],
            "totalPullRequestReviewContributions": [
                14
            ],
            "totalRepositoriesWithContributedCommits": [
                14
            ],
            "totalRepositoriesWithContributedIssues": [
                14,
                {
                    "excludeFirst": [
                        4
                    ],
                    "excludePopular": [
                        4
                    ]
                }
            ],
            "totalRepositoriesWithContributedPullRequestReviews": [
                14
            ],
            "totalRepositoriesWithContributedPullRequests": [
                14,
                {
                    "excludeFirst": [
                        4
                    ],
                    "excludePopular": [
                        4
                    ]
                }
            ],
            "totalRepositoryContributions": [
                14,
                {
                    "excludeFirst": [
                        4
                    ]
                }
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "ConvertProjectCardNoteToIssueInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "projectCardId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConvertProjectCardNoteToIssuePayload": {
            "clientMutationId": [
                1
            ],
            "projectCard": [
                836
            ],
            "__typename": [
                1
            ]
        },
        "ConvertProjectV2DraftIssueItemToIssueInput": {
            "clientMutationId": [
                1
            ],
            "itemId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ConvertProjectV2DraftIssueItemToIssuePayload": {
            "clientMutationId": [
                1
            ],
            "item": [
                876
            ],
            "__typename": [
                1
            ]
        },
        "ConvertPullRequestToDraftInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ConvertPullRequestToDraftPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "ConvertToDraftEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "ConvertedNoteToIssueEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "project": [
                835
            ],
            "projectCard": [
                836
            ],
            "projectColumnName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConvertedToDiscussionEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "discussion": [
                405
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CopilotEndpoints": {
            "api": [
                1
            ],
            "originTracker": [
                1
            ],
            "proxy": [
                1
            ],
            "telemetry": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CopyProjectV2Input": {
            "clientMutationId": [
                1
            ],
            "includeDraftIssues": [
                4
            ],
            "ownerId": [
                2
            ],
            "projectId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CopyProjectV2Payload": {
            "clientMutationId": [
                1
            ],
            "projectV2": [
                856
            ],
            "__typename": [
                1
            ]
        },
        "CreateAttributionInvitationInput": {
            "clientMutationId": [
                1
            ],
            "ownerId": [
                2
            ],
            "sourceId": [
                2
            ],
            "targetId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateAttributionInvitationPayload": {
            "clientMutationId": [
                1
            ],
            "owner": [
                757
            ],
            "source": [
                148
            ],
            "target": [
                148
            ],
            "__typename": [
                1
            ]
        },
        "CreateBranchProtectionRuleInput": {
            "allowsDeletions": [
                4
            ],
            "allowsForcePushes": [
                4
            ],
            "blocksCreations": [
                4
            ],
            "bypassForcePushActorIds": [
                2
            ],
            "bypassPullRequestActorIds": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "dismissesStaleReviews": [
                4
            ],
            "isAdminEnforced": [
                4
            ],
            "lockAllowsFetchAndMerge": [
                4
            ],
            "lockBranch": [
                4
            ],
            "pattern": [
                1
            ],
            "pushActorIds": [
                2
            ],
            "repositoryId": [
                2
            ],
            "requireLastPushApproval": [
                4
            ],
            "requiredApprovingReviewCount": [
                14
            ],
            "requiredDeploymentEnvironments": [
                1
            ],
            "requiredStatusCheckContexts": [
                1
            ],
            "requiredStatusChecks": [
                1178
            ],
            "requiresApprovingReviews": [
                4
            ],
            "requiresCodeOwnerReviews": [
                4
            ],
            "requiresCommitSignatures": [
                4
            ],
            "requiresConversationResolution": [
                4
            ],
            "requiresDeployments": [
                4
            ],
            "requiresLinearHistory": [
                4
            ],
            "requiresStatusChecks": [
                4
            ],
            "requiresStrictStatusChecks": [
                4
            ],
            "restrictsPushes": [
                4
            ],
            "restrictsReviewDismissals": [
                4
            ],
            "reviewDismissalActorIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateBranchProtectionRulePayload": {
            "branchProtectionRule": [
                93
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCheckRunInput": {
            "actions": [
                130
            ],
            "clientMutationId": [
                1
            ],
            "completedAt": [
                301
            ],
            "conclusion": [
                128
            ],
            "detailsUrl": [
                1389
            ],
            "externalId": [
                1
            ],
            "headSha": [
                552
            ],
            "name": [
                1
            ],
            "output": [
                134
            ],
            "repositoryId": [
                2
            ],
            "startedAt": [
                301
            ],
            "status": [
                1170
            ],
            "__typename": [
                1
            ]
        },
        "CreateCheckRunPayload": {
            "checkRun": [
                129
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCheckSuiteInput": {
            "clientMutationId": [
                1
            ],
            "headSha": [
                552
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateCheckSuitePayload": {
            "checkSuite": [
                143
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCommitOnBranchInput": {
            "branch": [
                193
            ],
            "clientMutationId": [
                1
            ],
            "expectedHeadOid": [
                552
            ],
            "fileChanges": [
                521
            ],
            "message": [
                190
            ],
            "__typename": [
                1
            ]
        },
        "CreateCommitOnBranchPayload": {
            "clientMutationId": [
                1
            ],
            "commit": [
                176
            ],
            "ref": [
                1009
            ],
            "__typename": [
                1
            ]
        },
        "CreateDeploymentInput": {
            "autoMerge": [
                4
            ],
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "environment": [
                1
            ],
            "payload": [
                1
            ],
            "refId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "requiredContexts": [
                1
            ],
            "task": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateDeploymentPayload": {
            "autoMerged": [
                4
            ],
            "clientMutationId": [
                1
            ],
            "deployment": [
                374
            ],
            "__typename": [
                1
            ]
        },
        "CreateDeploymentStatusInput": {
            "autoInactive": [
                4
            ],
            "clientMutationId": [
                1
            ],
            "deploymentId": [
                2
            ],
            "description": [
                1
            ],
            "environment": [
                1
            ],
            "environmentUrl": [
                1
            ],
            "logUrl": [
                1
            ],
            "state": [
                398
            ],
            "__typename": [
                1
            ]
        },
        "CreateDeploymentStatusPayload": {
            "clientMutationId": [
                1
            ],
            "deploymentStatus": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "CreateDiscussionInput": {
            "body": [
                1
            ],
            "categoryId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "discussion": [
                405
            ],
            "__typename": [
                1
            ]
        },
        "CreateEnterpriseOrganizationInput": {
            "adminLogins": [
                1
            ],
            "billingEmail": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "profileName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateEnterpriseOrganizationPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "organization": [
                757
            ],
            "__typename": [
                1
            ]
        },
        "CreateEnvironmentInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateEnvironmentPayload": {
            "clientMutationId": [
                1
            ],
            "environment": [
                508
            ],
            "__typename": [
                1
            ]
        },
        "CreateIpAllowListEntryInput": {
            "allowListValue": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "isActive": [
                4
            ],
            "name": [
                1
            ],
            "ownerId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateIpAllowListEntryPayload": {
            "clientMutationId": [
                1
            ],
            "ipAllowListEntry": [
                577
            ],
            "__typename": [
                1
            ]
        },
        "CreateIssueInput": {
            "assigneeIds": [
                2
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "issueTemplate": [
                1
            ],
            "labelIds": [
                2
            ],
            "milestoneId": [
                2
            ],
            "projectIds": [
                2
            ],
            "repositoryId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "CreateLabelInput": {
            "clientMutationId": [
                1
            ],
            "color": [
                1
            ],
            "description": [
                1
            ],
            "name": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateLabelPayload": {
            "clientMutationId": [
                1
            ],
            "label": [
                609
            ],
            "__typename": [
                1
            ]
        },
        "CreateLinkedBranchInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "name": [
                1
            ],
            "oid": [
                552
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateLinkedBranchPayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                584
            ],
            "linkedBranch": [
                629
            ],
            "__typename": [
                1
            ]
        },
        "CreateMigrationSourceInput": {
            "accessToken": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "githubPat": [
                1
            ],
            "name": [
                1
            ],
            "ownerId": [
                2
            ],
            "type": [
                685
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateMigrationSourcePayload": {
            "clientMutationId": [
                1
            ],
            "migrationSource": [
                684
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "ownerId": [
                2
            ],
            "repositoryIds": [
                2
            ],
            "template": [
                855
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectV2FieldInput": {
            "clientMutationId": [
                1
            ],
            "dataType": [
                862
            ],
            "name": [
                1
            ],
            "projectId": [
                2
            ],
            "singleSelectOptions": [
                912
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectV2FieldPayload": {
            "clientMutationId": [
                1
            ],
            "projectV2Field": [
                866
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectV2Input": {
            "clientMutationId": [
                1
            ],
            "ownerId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "teamId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectV2Payload": {
            "clientMutationId": [
                1
            ],
            "projectV2": [
                856
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectV2StatusUpdateInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "startDate": [
                300
            ],
            "status": [
                925
            ],
            "targetDate": [
                300
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectV2StatusUpdatePayload": {
            "clientMutationId": [
                1
            ],
            "statusUpdate": [
                921
            ],
            "__typename": [
                1
            ]
        },
        "CreatePullRequestInput": {
            "baseRefName": [
                1
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "draft": [
                4
            ],
            "headRefName": [
                1
            ],
            "headRepositoryId": [
                2
            ],
            "maintainerCanModify": [
                4
            ],
            "repositoryId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreatePullRequestPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "CreateRefInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "oid": [
                552
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateRefPayload": {
            "clientMutationId": [
                1
            ],
            "ref": [
                1009
            ],
            "__typename": [
                1
            ]
        },
        "CreateRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "hasIssuesEnabled": [
                4
            ],
            "hasWikiEnabled": [
                4
            ],
            "homepageUrl": [
                1389
            ],
            "name": [
                1
            ],
            "ownerId": [
                2
            ],
            "teamId": [
                2
            ],
            "template": [
                4
            ],
            "visibility": [
                1160
            ],
            "__typename": [
                1
            ]
        },
        "CreateRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "CreateRepositoryRulesetInput": {
            "bypassActors": [
                1153
            ],
            "clientMutationId": [
                1
            ],
            "conditions": [
                1141
            ],
            "enforcement": [
                1206
            ],
            "name": [
                1
            ],
            "rules": [
                1144
            ],
            "sourceId": [
                2
            ],
            "target": [
                1156
            ],
            "__typename": [
                1
            ]
        },
        "CreateRepositoryRulesetPayload": {
            "clientMutationId": [
                1
            ],
            "ruleset": [
                1148
            ],
            "__typename": [
                1
            ]
        },
        "CreateSponsorsListingInput": {
            "billingCountryOrRegionCode": [
                1276
            ],
            "clientMutationId": [
                1
            ],
            "contactEmail": [
                1
            ],
            "fiscalHostLogin": [
                1
            ],
            "fiscallyHostedProjectProfileUrl": [
                1
            ],
            "fullDescription": [
                1
            ],
            "residenceCountryOrRegionCode": [
                1276
            ],
            "sponsorableLogin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateSponsorsListingPayload": {
            "clientMutationId": [
                1
            ],
            "sponsorsListing": [
                1279
            ],
            "__typename": [
                1
            ]
        },
        "CreateSponsorsTierInput": {
            "amount": [
                14
            ],
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "isRecurring": [
                4
            ],
            "publish": [
                4
            ],
            "repositoryId": [
                2
            ],
            "repositoryName": [
                1
            ],
            "repositoryOwnerLogin": [
                1
            ],
            "sponsorableId": [
                2
            ],
            "sponsorableLogin": [
                1
            ],
            "welcomeMessage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateSponsorsTierPayload": {
            "clientMutationId": [
                1
            ],
            "sponsorsTier": [
                1283
            ],
            "__typename": [
                1
            ]
        },
        "CreateSponsorshipInput": {
            "amount": [
                14
            ],
            "clientMutationId": [
                1
            ],
            "isRecurring": [
                4
            ],
            "privacyLevel": [
                1300
            ],
            "receiveEmails": [
                4
            ],
            "sponsorId": [
                2
            ],
            "sponsorLogin": [
                1
            ],
            "sponsorableId": [
                2
            ],
            "sponsorableLogin": [
                1
            ],
            "tierId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateSponsorshipPayload": {
            "clientMutationId": [
                1
            ],
            "sponsorship": [
                1289
            ],
            "__typename": [
                1
            ]
        },
        "CreateSponsorshipsInput": {
            "clientMutationId": [
                1
            ],
            "privacyLevel": [
                1300
            ],
            "receiveEmails": [
                4
            ],
            "recurring": [
                4
            ],
            "sponsorLogin": [
                1
            ],
            "sponsorships": [
                99
            ],
            "__typename": [
                1
            ]
        },
        "CreateSponsorshipsPayload": {
            "clientMutationId": [
                1
            ],
            "sponsorables": [
                1263
            ],
            "__typename": [
                1
            ]
        },
        "CreateTeamDiscussionCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "discussionId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateTeamDiscussionCommentPayload": {
            "clientMutationId": [
                1
            ],
            "teamDiscussionComment": [
                1346
            ],
            "__typename": [
                1
            ]
        },
        "CreateTeamDiscussionInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "private": [
                4
            ],
            "teamId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateTeamDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "teamDiscussion": [
                1345
            ],
            "__typename": [
                1
            ]
        },
        "CreateUserListInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "isPrivate": [
                4
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateUserListPayload": {
            "clientMutationId": [
                1
            ],
            "list": [
                1563
            ],
            "viewer": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "CreatedCommitContribution": {
            "commitCount": [
                14
            ],
            "isRestricted": [
                4
            ],
            "occurredAt": [
                301
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "CreatedCommitContributionConnection": {
            "edges": [
                283
            ],
            "nodes": [
                281
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CreatedCommitContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                281
            ],
            "__typename": [
                1
            ]
        },
        "CreatedIssueContribution": {
            "isRestricted": [
                4
            ],
            "issue": [
                584
            ],
            "occurredAt": [
                301
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "CreatedIssueContributionConnection": {
            "edges": [
                286
            ],
            "nodes": [
                284
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CreatedIssueContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                284
            ],
            "__typename": [
                1
            ]
        },
        "CreatedIssueOrRestrictedContribution": {
            "on_CreatedIssueContribution": [
                284
            ],
            "on_RestrictedContribution": [
                1185
            ],
            "on_Contribution": [
                201
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestContribution": {
            "isRestricted": [
                4
            ],
            "occurredAt": [
                301
            ],
            "pullRequest": [
                944
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestContributionConnection": {
            "edges": [
                290
            ],
            "nodes": [
                288
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                288
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestOrRestrictedContribution": {
            "on_CreatedPullRequestContribution": [
                288
            ],
            "on_RestrictedContribution": [
                1185
            ],
            "on_Contribution": [
                201
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestReviewContribution": {
            "isRestricted": [
                4
            ],
            "occurredAt": [
                301
            ],
            "pullRequest": [
                944
            ],
            "pullRequestReview": [
                961
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestReviewContributionConnection": {
            "edges": [
                294
            ],
            "nodes": [
                292
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestReviewContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                292
            ],
            "__typename": [
                1
            ]
        },
        "CreatedRepositoryContribution": {
            "isRestricted": [
                4
            ],
            "occurredAt": [
                301
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "CreatedRepositoryContributionConnection": {
            "edges": [
                297
            ],
            "nodes": [
                295
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CreatedRepositoryContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "CreatedRepositoryOrRestrictedContribution": {
            "on_CreatedRepositoryContribution": [
                295
            ],
            "on_RestrictedContribution": [
                1185
            ],
            "on_Contribution": [
                201
            ],
            "__typename": [
                1
            ]
        },
        "CrossReferencedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                4
            ],
            "referencedAt": [
                301
            ],
            "resourcePath": [
                1389
            ],
            "source": [
                1019
            ],
            "target": [
                1019
            ],
            "url": [
                1389
            ],
            "willCloseTarget": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "Date": {},
        "DateTime": {},
        "DeclineTopicSuggestionInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "reason": [
                1380
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeclineTopicSuggestionPayload": {
            "clientMutationId": [
                1
            ],
            "topic": [
                1378
            ],
            "__typename": [
                1
            ]
        },
        "DefaultRepositoryPermissionField": {},
        "Deletable": {
            "viewerCanDelete": [
                4
            ],
            "on_CommitComment": [
                180
            ],
            "on_Discussion": [
                405
            ],
            "on_DiscussionComment": [
                410
            ],
            "on_GistComment": [
                538
            ],
            "on_Issue": [
                584
            ],
            "on_IssueComment": [
                586
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewComment": [
                962
            ],
            "on_TeamDiscussion": [
                1345
            ],
            "on_TeamDiscussionComment": [
                1346
            ],
            "__typename": [
                1
            ]
        },
        "DeleteBranchProtectionRuleInput": {
            "branchProtectionRuleId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteBranchProtectionRulePayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteDeploymentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteDeploymentPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteDiscussionCommentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteDiscussionCommentPayload": {
            "clientMutationId": [
                1
            ],
            "comment": [
                410
            ],
            "__typename": [
                1
            ]
        },
        "DeleteDiscussionInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "discussion": [
                405
            ],
            "__typename": [
                1
            ]
        },
        "DeleteEnvironmentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteEnvironmentPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIpAllowListEntryInput": {
            "clientMutationId": [
                1
            ],
            "ipAllowListEntryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIpAllowListEntryPayload": {
            "clientMutationId": [
                1
            ],
            "ipAllowListEntry": [
                577
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIssueCommentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIssueCommentPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIssuePayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "DeleteLabelInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteLabelPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteLinkedBranchInput": {
            "clientMutationId": [
                1
            ],
            "linkedBranchId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteLinkedBranchPayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "DeletePackageVersionInput": {
            "clientMutationId": [
                1
            ],
            "packageVersionId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeletePackageVersionPayload": {
            "clientMutationId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectCardInput": {
            "cardId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectCardPayload": {
            "clientMutationId": [
                1
            ],
            "column": [
                843
            ],
            "deletedCardId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectColumnInput": {
            "clientMutationId": [
                1
            ],
            "columnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectColumnPayload": {
            "clientMutationId": [
                1
            ],
            "deletedColumnId": [
                2
            ],
            "project": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectPayload": {
            "clientMutationId": [
                1
            ],
            "owner": [
                852
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2FieldInput": {
            "clientMutationId": [
                1
            ],
            "fieldId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2FieldPayload": {
            "clientMutationId": [
                1
            ],
            "projectV2Field": [
                866
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2Input": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2ItemInput": {
            "clientMutationId": [
                1
            ],
            "itemId": [
                2
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2ItemPayload": {
            "clientMutationId": [
                1
            ],
            "deletedItemId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2Payload": {
            "clientMutationId": [
                1
            ],
            "projectV2": [
                856
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2StatusUpdateInput": {
            "clientMutationId": [
                1
            ],
            "statusUpdateId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2StatusUpdatePayload": {
            "clientMutationId": [
                1
            ],
            "deletedStatusUpdateId": [
                2
            ],
            "projectV2": [
                856
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2WorkflowInput": {
            "clientMutationId": [
                1
            ],
            "workflowId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectV2WorkflowPayload": {
            "clientMutationId": [
                1
            ],
            "deletedWorkflowId": [
                2
            ],
            "projectV2": [
                856
            ],
            "__typename": [
                1
            ]
        },
        "DeletePullRequestReviewCommentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeletePullRequestReviewCommentPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                961
            ],
            "pullRequestReviewComment": [
                962
            ],
            "__typename": [
                1
            ]
        },
        "DeletePullRequestReviewInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeletePullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                961
            ],
            "__typename": [
                1
            ]
        },
        "DeleteRefInput": {
            "clientMutationId": [
                1
            ],
            "refId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteRefPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteRepositoryRulesetInput": {
            "clientMutationId": [
                1
            ],
            "repositoryRulesetId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteRepositoryRulesetPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTeamDiscussionCommentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTeamDiscussionCommentPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTeamDiscussionInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTeamDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteUserListInput": {
            "clientMutationId": [
                1
            ],
            "listId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteUserListPayload": {
            "clientMutationId": [
                1
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "DeleteVerifiableDomainInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteVerifiableDomainPayload": {
            "clientMutationId": [
                1
            ],
            "owner": [
                1580
            ],
            "__typename": [
                1
            ]
        },
        "DemilestonedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "milestoneTitle": [
                1
            ],
            "subject": [
                690
            ],
            "__typename": [
                1
            ]
        },
        "DependabotUpdate": {
            "error": [
                362
            ],
            "pullRequest": [
                944
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "DependabotUpdateError": {
            "body": [
                1
            ],
            "errorType": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphDependency": {
            "hasDependencies": [
                4
            ],
            "packageLabel": [
                1
            ],
            "packageManager": [
                1
            ],
            "packageName": [
                1
            ],
            "repository": [
                1096
            ],
            "requirements": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphDependencyConnection": {
            "edges": [
                365
            ],
            "nodes": [
                363
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphDependencyEdge": {
            "cursor": [
                1
            ],
            "node": [
                363
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphEcosystem": {},
        "DependencyGraphManifest": {
            "blobPath": [
                1
            ],
            "dependencies": [
                364,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "dependenciesCount": [
                14
            ],
            "exceedsMaxSize": [
                4
            ],
            "filename": [
                1
            ],
            "id": [
                2
            ],
            "parseable": [
                4
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphManifestConnection": {
            "edges": [
                369
            ],
            "nodes": [
                367
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphManifestEdge": {
            "cursor": [
                1
            ],
            "node": [
                367
            ],
            "__typename": [
                1
            ]
        },
        "DeployKey": {
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "key": [
                1
            ],
            "readOnly": [
                4
            ],
            "title": [
                1
            ],
            "verified": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "DeployKeyConnection": {
            "edges": [
                372
            ],
            "nodes": [
                370
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DeployKeyEdge": {
            "cursor": [
                1
            ],
            "node": [
                370
            ],
            "__typename": [
                1
            ]
        },
        "DeployedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "deployment": [
                374
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "ref": [
                1009
            ],
            "__typename": [
                1
            ]
        },
        "Deployment": {
            "commit": [
                176
            ],
            "commitOid": [
                1
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "description": [
                1
            ],
            "environment": [
                1
            ],
            "id": [
                2
            ],
            "latestEnvironment": [
                1
            ],
            "latestStatus": [
                395
            ],
            "originalEnvironment": [
                1
            ],
            "payload": [
                1
            ],
            "ref": [
                1009
            ],
            "repository": [
                1096
            ],
            "state": [
                394
            ],
            "statuses": [
                396,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "task": [
                1
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentConnection": {
            "edges": [
                376
            ],
            "nodes": [
                374
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentEdge": {
            "cursor": [
                1
            ],
            "node": [
                374
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentEnvironmentChangedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "deploymentStatus": [
                395
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentOrder": {
            "direction": [
                712
            ],
            "field": [
                379
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentOrderField": {},
        "DeploymentProtectionRule": {
            "databaseId": [
                14
            ],
            "preventSelfReview": [
                4
            ],
            "reviewers": [
                392,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "timeout": [
                14
            ],
            "type": [
                383
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentProtectionRuleConnection": {
            "edges": [
                382
            ],
            "nodes": [
                380
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentProtectionRuleEdge": {
            "cursor": [
                1
            ],
            "node": [
                380
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentProtectionRuleType": {},
        "DeploymentRequest": {
            "currentUserCanApprove": [
                4
            ],
            "environment": [
                508
            ],
            "reviewers": [
                392,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "waitTimer": [
                14
            ],
            "waitTimerStartedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentRequestConnection": {
            "edges": [
                386
            ],
            "nodes": [
                384
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentRequestEdge": {
            "cursor": [
                1
            ],
            "node": [
                384
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentReview": {
            "comment": [
                1
            ],
            "databaseId": [
                14
            ],
            "environments": [
                509,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "id": [
                2
            ],
            "state": [
                390
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentReviewConnection": {
            "edges": [
                389
            ],
            "nodes": [
                387
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentReviewEdge": {
            "cursor": [
                1
            ],
            "node": [
                387
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentReviewState": {},
        "DeploymentReviewer": {
            "on_Team": [
                1339
            ],
            "on_User": [
                1554
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Node": [
                704
            ],
            "on_Subscribable": [
                1331
            ],
            "on_Actor": [
                13
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentReviewerConnection": {
            "edges": [
                393
            ],
            "nodes": [
                391
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentReviewerEdge": {
            "cursor": [
                1
            ],
            "node": [
                391
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentState": {},
        "DeploymentStatus": {
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "deployment": [
                374
            ],
            "description": [
                1
            ],
            "environment": [
                1
            ],
            "environmentUrl": [
                1389
            ],
            "id": [
                2
            ],
            "logUrl": [
                1389
            ],
            "state": [
                398
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentStatusConnection": {
            "edges": [
                397
            ],
            "nodes": [
                395
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentStatusEdge": {
            "cursor": [
                1
            ],
            "node": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentStatusState": {},
        "DequeuePullRequestInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DequeuePullRequestPayload": {
            "clientMutationId": [
                1
            ],
            "mergeQueueEntry": [
                675
            ],
            "__typename": [
                1
            ]
        },
        "DiffSide": {},
        "DisablePullRequestAutoMergeInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DisablePullRequestAutoMergePayload": {
            "actor": [
                13
            ],
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "DisconnectedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                4
            ],
            "source": [
                1019
            ],
            "subject": [
                1019
            ],
            "__typename": [
                1
            ]
        },
        "Discussion": {
            "activeLockReason": [
                634
            ],
            "answer": [
                410
            ],
            "answerChosenAt": [
                301
            ],
            "answerChosenBy": [
                13
            ],
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "category": [
                406
            ],
            "closed": [
                4
            ],
            "closedAt": [
                301
            ],
            "comments": [
                411,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "editor": [
                13
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isAnswered": [
                4
            ],
            "labels": [
                610,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        612
                    ]
                }
            ],
            "lastEditedAt": [
                301
            ],
            "locked": [
                4
            ],
            "number": [
                14
            ],
            "poll": [
                417
            ],
            "publishedAt": [
                301
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "stateReason": [
                424
            ],
            "title": [
                1
            ],
            "updatedAt": [
                301
            ],
            "upvoteCount": [
                14
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanClose": [
                4
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanReopen": [
                4
            ],
            "viewerCanSubscribe": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCanUpvote": [
                4
            ],
            "viewerDidAuthor": [
                4
            ],
            "viewerHasUpvoted": [
                4
            ],
            "viewerSubscription": [
                1334
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionCategory": {
            "createdAt": [
                301
            ],
            "description": [
                1
            ],
            "emoji": [
                1
            ],
            "emojiHTML": [
                563
            ],
            "id": [
                2
            ],
            "isAnswerable": [
                4
            ],
            "name": [
                1
            ],
            "repository": [
                1096
            ],
            "slug": [
                1
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionCategoryConnection": {
            "edges": [
                408
            ],
            "nodes": [
                406
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionCategoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                406
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionCloseReason": {},
        "DiscussionComment": {
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "deletedAt": [
                301
            ],
            "discussion": [
                405
            ],
            "editor": [
                13
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isAnswer": [
                4
            ],
            "isMinimized": [
                4
            ],
            "lastEditedAt": [
                301
            ],
            "minimizedReason": [
                1
            ],
            "publishedAt": [
                301
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "replies": [
                411,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "replyTo": [
                410
            ],
            "resourcePath": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "upvoteCount": [
                14
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanMarkAsAnswer": [
                4
            ],
            "viewerCanMinimize": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanUnmarkAsAnswer": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCanUpvote": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "viewerHasUpvoted": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionCommentConnection": {
            "edges": [
                412
            ],
            "nodes": [
                410
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                410
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionConnection": {
            "edges": [
                414
            ],
            "nodes": [
                405
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionEdge": {
            "cursor": [
                1
            ],
            "node": [
                405
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionOrder": {
            "direction": [
                712
            ],
            "field": [
                416
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionOrderField": {},
        "DiscussionPoll": {
            "discussion": [
                405
            ],
            "id": [
                2
            ],
            "options": [
                419,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        421
                    ]
                }
            ],
            "question": [
                1
            ],
            "totalVoteCount": [
                14
            ],
            "viewerCanVote": [
                4
            ],
            "viewerHasVoted": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionPollOption": {
            "id": [
                2
            ],
            "option": [
                1
            ],
            "poll": [
                417
            ],
            "totalVoteCount": [
                14
            ],
            "viewerHasVoted": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionPollOptionConnection": {
            "edges": [
                420
            ],
            "nodes": [
                418
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionPollOptionEdge": {
            "cursor": [
                1
            ],
            "node": [
                418
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionPollOptionOrder": {
            "direction": [
                712
            ],
            "field": [
                422
            ],
            "__typename": [
                1
            ]
        },
        "DiscussionPollOptionOrderField": {},
        "DiscussionState": {},
        "DiscussionStateReason": {},
        "DismissPullRequestReviewInput": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DismissPullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                961
            ],
            "__typename": [
                1
            ]
        },
        "DismissReason": {},
        "DismissRepositoryVulnerabilityAlertInput": {
            "clientMutationId": [
                1
            ],
            "dismissReason": [
                427
            ],
            "repositoryVulnerabilityAlertId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DismissRepositoryVulnerabilityAlertPayload": {
            "clientMutationId": [
                1
            ],
            "repositoryVulnerabilityAlert": [
                1163
            ],
            "__typename": [
                1
            ]
        },
        "DraftIssue": {
            "assignees": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "id": [
                2
            ],
            "projectV2Items": [
                877,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "projectsV2": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "title": [
                1
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "DraftPullRequestReviewComment": {
            "body": [
                1
            ],
            "path": [
                1
            ],
            "position": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DraftPullRequestReviewThread": {
            "body": [
                1
            ],
            "line": [
                14
            ],
            "path": [
                1
            ],
            "side": [
                401
            ],
            "startLine": [
                14
            ],
            "startSide": [
                401
            ],
            "__typename": [
                1
            ]
        },
        "EnablePullRequestAutoMergeInput": {
            "authorEmail": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "commitBody": [
                1
            ],
            "commitHeadline": [
                1
            ],
            "expectedHeadOid": [
                552
            ],
            "mergeMethod": [
                956
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "EnablePullRequestAutoMergePayload": {
            "actor": [
                13
            ],
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "EnqueuePullRequestInput": {
            "clientMutationId": [
                1
            ],
            "expectedHeadOid": [
                552
            ],
            "jump": [
                4
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "EnqueuePullRequestPayload": {
            "clientMutationId": [
                1
            ],
            "mergeQueueEntry": [
                675
            ],
            "__typename": [
                1
            ]
        },
        "Enterprise": {
            "announcement": [
                1
            ],
            "announcementCreatedAt": [
                301
            ],
            "announcementExpiresAt": [
                301
            ],
            "announcementUserDismissible": [
                4
            ],
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "billingEmail": [
                1
            ],
            "billingInfo": [
                448
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                563
            ],
            "id": [
                2
            ],
            "location": [
                1
            ],
            "members": [
                458,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "deployment": [
                        507
                    ],
                    "first": [
                        14
                    ],
                    "hasTwoFactorEnabled": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        465
                    ],
                    "organizationLogins": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        506
                    ]
                }
            ],
            "name": [
                1
            ],
            "organizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "query": [
                        1
                    ],
                    "viewerOrganizationRole": [
                        1205
                    ]
                }
            ],
            "ownerInfo": [
                476
            ],
            "readme": [
                1
            ],
            "readmeHTML": [
                563
            ],
            "resourcePath": [
                1389
            ],
            "slug": [
                1
            ],
            "url": [
                1389
            ],
            "viewerIsAdmin": [
                4
            ],
            "websiteUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorConnection": {
            "edges": [
                439
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorEdge": {
            "cursor": [
                1
            ],
            "node": [
                1554
            ],
            "role": [
                445
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitation": {
            "createdAt": [
                301
            ],
            "email": [
                1
            ],
            "enterprise": [
                437
            ],
            "id": [
                2
            ],
            "invitee": [
                1554
            ],
            "inviter": [
                1554
            ],
            "role": [
                445
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitationConnection": {
            "edges": [
                442
            ],
            "nodes": [
                440
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitationEdge": {
            "cursor": [
                1
            ],
            "node": [
                440
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitationOrder": {
            "direction": [
                712
            ],
            "field": [
                444
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitationOrderField": {},
        "EnterpriseAdministratorRole": {},
        "EnterpriseAllowPrivateRepositoryForkingPolicyValue": {},
        "EnterpriseAuditEntryData": {
            "enterpriseResourcePath": [
                1389
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                1389
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                663
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                664
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                665
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                730
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                831
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                832
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                1161
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                1162
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseBillingInfo": {
            "allLicensableUsersCount": [
                14
            ],
            "assetPacks": [
                14
            ],
            "bandwidthQuota": [
                108
            ],
            "bandwidthUsage": [
                108
            ],
            "bandwidthUsagePercentage": [
                14
            ],
            "storageQuota": [
                108
            ],
            "storageUsage": [
                108
            ],
            "storageUsagePercentage": [
                14
            ],
            "totalAvailableLicenses": [
                14
            ],
            "totalLicenses": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseConnection": {
            "edges": [
                451
            ],
            "nodes": [
                437
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseDefaultRepositoryPermissionSettingValue": {},
        "EnterpriseEdge": {
            "cursor": [
                1
            ],
            "node": [
                437
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseEnabledDisabledSettingValue": {},
        "EnterpriseEnabledSettingValue": {},
        "EnterpriseFailedInvitationConnection": {
            "edges": [
                455
            ],
            "nodes": [
                767
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "totalUniqueUserCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseFailedInvitationEdge": {
            "cursor": [
                1
            ],
            "node": [
                767
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseIdentityProvider": {
            "digestMethod": [
                1210
            ],
            "enterprise": [
                437
            ],
            "externalIdentities": [
                516,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "login": [
                        1
                    ],
                    "membersOnly": [
                        4
                    ],
                    "userName": [
                        1
                    ]
                }
            ],
            "id": [
                2
            ],
            "idpCertificate": [
                1597
            ],
            "issuer": [
                1
            ],
            "recoveryCodes": [
                1
            ],
            "signatureMethod": [
                1211
            ],
            "ssoUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMember": {
            "on_EnterpriseUserAccount": [
                505
            ],
            "on_User": [
                1554
            ],
            "on_Actor": [
                13
            ],
            "on_Node": [
                704
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberConnection": {
            "edges": [
                459
            ],
            "nodes": [
                457
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberEdge": {
            "cursor": [
                1
            ],
            "node": [
                457
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberInvitation": {
            "createdAt": [
                301
            ],
            "email": [
                1
            ],
            "enterprise": [
                437
            ],
            "id": [
                2
            ],
            "invitee": [
                1554
            ],
            "inviter": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberInvitationConnection": {
            "edges": [
                462
            ],
            "nodes": [
                460
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberInvitationEdge": {
            "cursor": [
                1
            ],
            "node": [
                460
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberInvitationOrder": {
            "direction": [
                712
            ],
            "field": [
                464
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberInvitationOrderField": {},
        "EnterpriseMemberOrder": {
            "direction": [
                712
            ],
            "field": [
                466
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberOrderField": {},
        "EnterpriseMembersCanCreateRepositoriesSettingValue": {},
        "EnterpriseMembersCanMakePurchasesSettingValue": {},
        "EnterpriseMembershipType": {},
        "EnterpriseOrder": {
            "direction": [
                712
            ],
            "field": [
                471
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseOrderField": {},
        "EnterpriseOrganizationMembershipConnection": {
            "edges": [
                473
            ],
            "nodes": [
                757
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseOrganizationMembershipEdge": {
            "cursor": [
                1
            ],
            "node": [
                757
            ],
            "role": [
                506
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseOutsideCollaboratorConnection": {
            "edges": [
                475
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseOutsideCollaboratorEdge": {
            "cursor": [
                1
            ],
            "node": [
                1554
            ],
            "repositories": [
                480,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseOwnerInfo": {
            "admins": [
                438,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "hasTwoFactorEnabled": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        465
                    ],
                    "organizationLogins": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        445
                    ]
                }
            ],
            "affiliatedUsersWithTwoFactorDisabled": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "affiliatedUsersWithTwoFactorDisabledExist": [
                4
            ],
            "allowPrivateRepositoryForkingSetting": [
                452
            ],
            "allowPrivateRepositoryForkingSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "allowPrivateRepositoryForkingSettingPolicyValue": [
                446
            ],
            "defaultRepositoryPermissionSetting": [
                450
            ],
            "defaultRepositoryPermissionSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        304,
                        "DefaultRepositoryPermissionField!"
                    ]
                }
            ],
            "domains": [
                1576,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "isApproved": [
                        4
                    ],
                    "isVerified": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1578
                    ]
                }
            ],
            "enterpriseServerInstallations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "connectedOnly": [
                        4
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        487
                    ]
                }
            ],
            "failedInvitations": [
                454,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "ipAllowListEnabledSetting": [
                576
            ],
            "ipAllowListEntries": [
                578,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        580
                    ]
                }
            ],
            "ipAllowListForInstalledAppsEnabledSetting": [
                582
            ],
            "isUpdatingDefaultRepositoryPermission": [
                4
            ],
            "isUpdatingTwoFactorRequirement": [
                4
            ],
            "membersCanChangeRepositoryVisibilitySetting": [
                452
            ],
            "membersCanChangeRepositoryVisibilitySettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanCreateInternalRepositoriesSetting": [
                4
            ],
            "membersCanCreatePrivateRepositoriesSetting": [
                4
            ],
            "membersCanCreatePublicRepositoriesSetting": [
                4
            ],
            "membersCanCreateRepositoriesSetting": [
                467
            ],
            "membersCanCreateRepositoriesSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        776,
                        "OrganizationMembersCanCreateRepositoriesSettingValue!"
                    ]
                }
            ],
            "membersCanDeleteIssuesSetting": [
                452
            ],
            "membersCanDeleteIssuesSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanDeleteRepositoriesSetting": [
                452
            ],
            "membersCanDeleteRepositoriesSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanInviteCollaboratorsSetting": [
                452
            ],
            "membersCanInviteCollaboratorsSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanMakePurchasesSetting": [
                468
            ],
            "membersCanUpdateProtectedBranchesSetting": [
                452
            ],
            "membersCanUpdateProtectedBranchesSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanViewDependencyInsightsSetting": [
                452
            ],
            "membersCanViewDependencyInsightsSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "notificationDeliveryRestrictionEnabledSetting": [
                705
            ],
            "oidcProvider": [
                706
            ],
            "organizationProjectsSetting": [
                452
            ],
            "organizationProjectsSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "outsideCollaborators": [
                474,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "hasTwoFactorEnabled": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "login": [
                        1
                    ],
                    "orderBy": [
                        465
                    ],
                    "organizationLogins": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        1
                    ],
                    "visibility": [
                        1160
                    ]
                }
            ],
            "pendingAdminInvitations": [
                441,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        443
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        445
                    ]
                }
            ],
            "pendingCollaboratorInvitations": [
                1117,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1119
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "pendingMemberInvitations": [
                477,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "invitationSource": [
                        771
                    ],
                    "last": [
                        14
                    ],
                    "organizationLogins": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "pendingUnaffiliatedMemberInvitations": [
                461,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        463
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "repositoryProjectsSetting": [
                452
            ],
            "repositoryProjectsSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "samlIdentityProvider": [
                456
            ],
            "samlIdentityProviderSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        569,
                        "IdentityProviderConfigurationState!"
                    ]
                }
            ],
            "supportEntitlements": [
                458,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        465
                    ]
                }
            ],
            "teamDiscussionsSetting": [
                452
            ],
            "teamDiscussionsSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "twoFactorRequiredSetting": [
                453
            ],
            "twoFactorRequiredSettingOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "value": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EnterprisePendingMemberInvitationConnection": {
            "edges": [
                478
            ],
            "nodes": [
                767
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "totalUniqueUserCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterprisePendingMemberInvitationEdge": {
            "cursor": [
                1
            ],
            "node": [
                767
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseRepositoryInfo": {
            "id": [
                2
            ],
            "isPrivate": [
                4
            ],
            "name": [
                1
            ],
            "nameWithOwner": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseRepositoryInfoConnection": {
            "edges": [
                481
            ],
            "nodes": [
                479
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseRepositoryInfoEdge": {
            "cursor": [
                1
            ],
            "node": [
                479
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallation": {
            "createdAt": [
                301
            ],
            "customerName": [
                1
            ],
            "hostName": [
                1
            ],
            "id": [
                2
            ],
            "isConnected": [
                4
            ],
            "updatedAt": [
                301
            ],
            "userAccounts": [
                490,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        497
                    ]
                }
            ],
            "userAccountsUploads": [
                500,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        502
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationConnection": {
            "edges": [
                484
            ],
            "nodes": [
                482
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationEdge": {
            "cursor": [
                1
            ],
            "node": [
                482
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationMembershipConnection": {
            "edges": [
                486
            ],
            "nodes": [
                482
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationMembershipEdge": {
            "cursor": [
                1
            ],
            "node": [
                482
            ],
            "role": [
                506
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationOrder": {
            "direction": [
                712
            ],
            "field": [
                488
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationOrderField": {},
        "EnterpriseServerUserAccount": {
            "createdAt": [
                301
            ],
            "emails": [
                493,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        495
                    ]
                }
            ],
            "enterpriseServerInstallation": [
                482
            ],
            "id": [
                2
            ],
            "isSiteAdmin": [
                4
            ],
            "login": [
                1
            ],
            "profileName": [
                1
            ],
            "remoteCreatedAt": [
                301
            ],
            "remoteUserId": [
                14
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountConnection": {
            "edges": [
                491
            ],
            "nodes": [
                489
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEdge": {
            "cursor": [
                1
            ],
            "node": [
                489
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmail": {
            "createdAt": [
                301
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "isPrimary": [
                4
            ],
            "updatedAt": [
                301
            ],
            "userAccount": [
                489
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmailConnection": {
            "edges": [
                494
            ],
            "nodes": [
                492
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmailEdge": {
            "cursor": [
                1
            ],
            "node": [
                492
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmailOrder": {
            "direction": [
                712
            ],
            "field": [
                496
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmailOrderField": {},
        "EnterpriseServerUserAccountOrder": {
            "direction": [
                712
            ],
            "field": [
                498
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountOrderField": {},
        "EnterpriseServerUserAccountsUpload": {
            "createdAt": [
                301
            ],
            "enterprise": [
                437
            ],
            "enterpriseServerInstallation": [
                482
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "syncState": [
                504
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountsUploadConnection": {
            "edges": [
                501
            ],
            "nodes": [
                499
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountsUploadEdge": {
            "cursor": [
                1
            ],
            "node": [
                499
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountsUploadOrder": {
            "direction": [
                712
            ],
            "field": [
                503
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountsUploadOrderField": {},
        "EnterpriseServerUserAccountsUploadSyncState": {},
        "EnterpriseUserAccount": {
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "createdAt": [
                301
            ],
            "enterprise": [
                437
            ],
            "enterpriseInstallations": [
                485,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        487
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        506
                    ]
                }
            ],
            "id": [
                2
            ],
            "login": [
                1
            ],
            "name": [
                1
            ],
            "organizations": [
                472,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        506
                    ]
                }
            ],
            "resourcePath": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseUserAccountMembershipRole": {},
        "EnterpriseUserDeployment": {},
        "Environment": {
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "isPinned": [
                4
            ],
            "latestCompletedDeployment": [
                374
            ],
            "name": [
                1
            ],
            "pinnedPosition": [
                14
            ],
            "protectionRules": [
                381,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EnvironmentConnection": {
            "edges": [
                510
            ],
            "nodes": [
                508
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "EnvironmentEdge": {
            "cursor": [
                1
            ],
            "node": [
                508
            ],
            "__typename": [
                1
            ]
        },
        "EnvironmentOrderField": {},
        "EnvironmentPinnedFilterField": {},
        "Environments": {
            "direction": [
                712
            ],
            "field": [
                511
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentity": {
            "guid": [
                1
            ],
            "id": [
                2
            ],
            "organizationInvitation": [
                767
            ],
            "samlIdentity": [
                518
            ],
            "scimIdentity": [
                519
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentityAttribute": {
            "metadata": [
                1
            ],
            "name": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentityConnection": {
            "edges": [
                517
            ],
            "nodes": [
                514
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentityEdge": {
            "cursor": [
                1
            ],
            "node": [
                514
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentitySamlAttributes": {
            "attributes": [
                515
            ],
            "emails": [
                1562
            ],
            "familyName": [
                1
            ],
            "givenName": [
                1
            ],
            "groups": [
                1
            ],
            "nameId": [
                1
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentityScimAttributes": {
            "emails": [
                1562
            ],
            "familyName": [
                1
            ],
            "givenName": [
                1
            ],
            "groups": [
                1
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileAddition": {
            "contents": [
                81
            ],
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileChanges": {
            "additions": [
                520
            ],
            "deletions": [
                522
            ],
            "__typename": [
                1
            ]
        },
        "FileDeletion": {
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileExtensionRestrictionParameters": {
            "restrictedFileExtensions": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileExtensionRestrictionParametersInput": {
            "restrictedFileExtensions": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FilePathRestrictionParameters": {
            "restrictedFilePaths": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FilePathRestrictionParametersInput": {
            "restrictedFilePaths": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileViewedState": {},
        "FollowOrganizationInput": {
            "clientMutationId": [
                1
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "FollowOrganizationPayload": {
            "clientMutationId": [
                1
            ],
            "organization": [
                757
            ],
            "__typename": [
                1
            ]
        },
        "FollowUserInput": {
            "clientMutationId": [
                1
            ],
            "userId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "FollowUserPayload": {
            "clientMutationId": [
                1
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "FollowerConnection": {
            "edges": [
                1561
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "FollowingConnection": {
            "edges": [
                1561
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "FundingLink": {
            "platform": [
                535
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "FundingPlatform": {},
        "GenericHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Gist": {
            "comments": [
                539,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "createdAt": [
                301
            ],
            "description": [
                1
            ],
            "files": [
                543,
                {
                    "limit": [
                        14
                    ],
                    "oid": [
                        552
                    ]
                }
            ],
            "forks": [
                541,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        544
                    ]
                }
            ],
            "id": [
                2
            ],
            "isFork": [
                4
            ],
            "isPublic": [
                4
            ],
            "name": [
                1
            ],
            "owner": [
                1133
            ],
            "pushedAt": [
                301
            ],
            "resourcePath": [
                1389
            ],
            "stargazerCount": [
                14
            ],
            "stargazers": [
                1306,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1304
                    ]
                }
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "viewerHasStarred": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "GistComment": {
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "editor": [
                13
            ],
            "gist": [
                537
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isMinimized": [
                4
            ],
            "lastEditedAt": [
                301
            ],
            "minimizedReason": [
                1
            ],
            "publishedAt": [
                301
            ],
            "updatedAt": [
                301
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanMinimize": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "GistCommentConnection": {
            "edges": [
                540
            ],
            "nodes": [
                538
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "GistCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                538
            ],
            "__typename": [
                1
            ]
        },
        "GistConnection": {
            "edges": [
                542
            ],
            "nodes": [
                537
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "GistEdge": {
            "cursor": [
                1
            ],
            "node": [
                537
            ],
            "__typename": [
                1
            ]
        },
        "GistFile": {
            "encodedName": [
                1
            ],
            "encoding": [
                1
            ],
            "extension": [
                1
            ],
            "isImage": [
                4
            ],
            "isTruncated": [
                4
            ],
            "language": [
                616
            ],
            "name": [
                1
            ],
            "size": [
                14
            ],
            "text": [
                1,
                {
                    "truncate": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "GistOrder": {
            "direction": [
                712
            ],
            "field": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "GistOrderField": {},
        "GistPrivacy": {},
        "GitActor": {
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "date": [
                557
            ],
            "email": [
                1
            ],
            "name": [
                1
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "GitActorConnection": {
            "edges": [
                549
            ],
            "nodes": [
                547
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "GitActorEdge": {
            "cursor": [
                1
            ],
            "node": [
                547
            ],
            "__typename": [
                1
            ]
        },
        "GitHubMetadata": {
            "gitHubServicesSha": [
                552
            ],
            "gitIpAddresses": [
                1
            ],
            "githubEnterpriseImporterIpAddresses": [
                1
            ],
            "hookIpAddresses": [
                1
            ],
            "importerIpAddresses": [
                1
            ],
            "isPasswordAuthenticationVerifiable": [
                4
            ],
            "pagesIpAddresses": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GitObject": {
            "abbreviatedOid": [
                1
            ],
            "commitResourcePath": [
                1389
            ],
            "commitUrl": [
                1389
            ],
            "id": [
                2
            ],
            "oid": [
                552
            ],
            "repository": [
                1096
            ],
            "on_Blob": [
                88
            ],
            "on_Commit": [
                176
            ],
            "on_Tag": [
                1336
            ],
            "on_Tree": [
                1387
            ],
            "__typename": [
                1
            ]
        },
        "GitObjectID": {},
        "GitRefname": {},
        "GitSSHRemote": {},
        "GitSignature": {
            "email": [
                1
            ],
            "isValid": [
                4
            ],
            "payload": [
                1
            ],
            "signature": [
                1
            ],
            "signer": [
                1554
            ],
            "state": [
                556
            ],
            "wasSignedByGitHub": [
                4
            ],
            "on_GpgSignature": [
                558
            ],
            "on_SmimeSignature": [
                1248
            ],
            "on_SshSignature": [
                1303
            ],
            "on_UnknownSignature": [
                1400
            ],
            "__typename": [
                1
            ]
        },
        "GitSignatureState": {},
        "GitTimestamp": {},
        "GpgSignature": {
            "email": [
                1
            ],
            "isValid": [
                4
            ],
            "keyId": [
                1
            ],
            "payload": [
                1
            ],
            "signature": [
                1
            ],
            "signer": [
                1554
            ],
            "state": [
                556
            ],
            "wasSignedByGitHub": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "GrantEnterpriseOrganizationsMigratorRoleInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GrantEnterpriseOrganizationsMigratorRolePayload": {
            "clientMutationId": [
                1
            ],
            "organizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "GrantMigratorRoleInput": {
            "actor": [
                1
            ],
            "actorType": [
                16
            ],
            "clientMutationId": [
                1
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "GrantMigratorRolePayload": {
            "clientMutationId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "HTML": {},
        "HeadRefDeletedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "headRef": [
                1009
            ],
            "headRefName": [
                1
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "HeadRefForcePushedEvent": {
            "actor": [
                13
            ],
            "afterCommit": [
                176
            ],
            "beforeCommit": [
                176
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "ref": [
                1009
            ],
            "__typename": [
                1
            ]
        },
        "HeadRefRestoredEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "Hovercard": {
            "contexts": [
                568
            ],
            "__typename": [
                1
            ]
        },
        "HovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "on_GenericHovercardContext": [
                536
            ],
            "on_OrganizationTeamsHovercardContext": [
                782
            ],
            "on_OrganizationsHovercardContext": [
                783
            ],
            "on_ReviewStatusHovercardContext": [
                1200
            ],
            "on_ViewerHovercardContext": [
                1583
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurationState": {},
        "ImportProjectInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "columnImports": [
                846
            ],
            "name": [
                1
            ],
            "ownerName": [
                1
            ],
            "public": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ImportProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "InviteEnterpriseAdminInput": {
            "clientMutationId": [
                1
            ],
            "email": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "invitee": [
                1
            ],
            "role": [
                445
            ],
            "__typename": [
                1
            ]
        },
        "InviteEnterpriseAdminPayload": {
            "clientMutationId": [
                1
            ],
            "invitation": [
                440
            ],
            "__typename": [
                1
            ]
        },
        "InviteEnterpriseMemberInput": {
            "clientMutationId": [
                1
            ],
            "email": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "invitee": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "InviteEnterpriseMemberPayload": {
            "clientMutationId": [
                1
            ],
            "invitation": [
                460
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEnabledSettingValue": {},
        "IpAllowListEntry": {
            "allowListValue": [
                1
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "isActive": [
                4
            ],
            "name": [
                1
            ],
            "owner": [
                583
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEntryConnection": {
            "edges": [
                579
            ],
            "nodes": [
                577
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEntryEdge": {
            "cursor": [
                1
            ],
            "node": [
                577
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEntryOrder": {
            "direction": [
                712
            ],
            "field": [
                581
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEntryOrderField": {},
        "IpAllowListForInstalledAppsEnabledSettingValue": {},
        "IpAllowListOwner": {
            "on_App": [
                58
            ],
            "on_Enterprise": [
                437
            ],
            "on_Organization": [
                757
            ],
            "on_Node": [
                704
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_Actor": [
                13
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "Issue": {
            "activeLockReason": [
                634
            ],
            "assignees": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyResourcePath": [
                1389
            ],
            "bodyText": [
                1
            ],
            "bodyUrl": [
                1389
            ],
            "closed": [
                4
            ],
            "closedAt": [
                301
            ],
            "comments": [
                587,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        589
                    ]
                }
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "editor": [
                13
            ],
            "fullDatabaseId": [
                85
            ],
            "hovercard": [
                567,
                {
                    "includeNotificationContexts": [
                        4
                    ]
                }
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isPinned": [
                4
            ],
            "isReadByViewer": [
                4
            ],
            "labels": [
                610,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        612
                    ]
                }
            ],
            "lastEditedAt": [
                301
            ],
            "linkedBranches": [
                630,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "locked": [
                4
            ],
            "milestone": [
                687
            ],
            "number": [
                14
            ],
            "participants": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "projectCards": [
                838,
                {
                    "after": [
                        1
                    ],
                    "archivedStates": [
                        837,
                        "[ProjectCardArchivedState]"
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "projectItems": [
                877,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includeArchived": [
                        4
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "projectV2": [
                856,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projectsV2": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "minPermissionLevel": [
                        906
                    ],
                    "orderBy": [
                        903
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "publishedAt": [
                301
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "state": [
                598
            ],
            "stateReason": [
                599
            ],
            "timeline": [
                601,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "since": [
                        301
                    ]
                }
            ],
            "timelineItems": [
                605,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "itemTypes": [
                        607,
                        "[IssueTimelineItemsItemType!]"
                    ],
                    "last": [
                        14
                    ],
                    "since": [
                        301
                    ],
                    "skip": [
                        14
                    ]
                }
            ],
            "title": [
                1
            ],
            "titleHTML": [
                1
            ],
            "trackedInIssues": [
                591,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "trackedIssues": [
                591,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "trackedIssuesCount": [
                14,
                {
                    "states": [
                        1381,
                        "[TrackedIssueStates]"
                    ]
                }
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanClose": [
                4
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanReopen": [
                4
            ],
            "viewerCanSubscribe": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "viewerSubscription": [
                1334
            ],
            "viewerThreadSubscriptionFormAction": [
                1376
            ],
            "viewerThreadSubscriptionStatus": [
                1377
            ],
            "__typename": [
                1
            ]
        },
        "IssueClosedStateReason": {},
        "IssueComment": {
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "editor": [
                13
            ],
            "fullDatabaseId": [
                85
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isMinimized": [
                4
            ],
            "issue": [
                584
            ],
            "lastEditedAt": [
                301
            ],
            "minimizedReason": [
                1
            ],
            "publishedAt": [
                301
            ],
            "pullRequest": [
                944
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanMinimize": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "IssueCommentConnection": {
            "edges": [
                588
            ],
            "nodes": [
                586
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "IssueCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                586
            ],
            "__typename": [
                1
            ]
        },
        "IssueCommentOrder": {
            "direction": [
                712
            ],
            "field": [
                590
            ],
            "__typename": [
                1
            ]
        },
        "IssueCommentOrderField": {},
        "IssueConnection": {
            "edges": [
                593
            ],
            "nodes": [
                584
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "IssueContributionsByRepository": {
            "contributions": [
                285,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        207
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "IssueEdge": {
            "cursor": [
                1
            ],
            "node": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "IssueFilters": {
            "assignee": [
                1
            ],
            "createdBy": [
                1
            ],
            "labels": [
                1
            ],
            "mentioned": [
                1
            ],
            "milestone": [
                1
            ],
            "milestoneNumber": [
                1
            ],
            "since": [
                301
            ],
            "states": [
                598
            ],
            "viewerSubscribed": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "IssueOrPullRequest": {
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "on_Assignable": [
                67
            ],
            "on_Closable": [
                157
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Labelable": [
                614
            ],
            "on_Lockable": [
                635
            ],
            "on_Node": [
                704
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Subscribable": [
                1331
            ],
            "on_SubscribableThread": [
                1332
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "IssueOrder": {
            "direction": [
                712
            ],
            "field": [
                597
            ],
            "__typename": [
                1
            ]
        },
        "IssueOrderField": {},
        "IssueState": {},
        "IssueStateReason": {},
        "IssueTemplate": {
            "about": [
                1
            ],
            "assignees": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "body": [
                1
            ],
            "filename": [
                1
            ],
            "labels": [
                610,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        612
                    ]
                }
            ],
            "name": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineConnection": {
            "edges": [
                603
            ],
            "nodes": [
                602
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItem": {
            "on_AssignedEvent": [
                68
            ],
            "on_ClosedEvent": [
                164
            ],
            "on_Commit": [
                176
            ],
            "on_CrossReferencedEvent": [
                299
            ],
            "on_DemilestonedEvent": [
                360
            ],
            "on_IssueComment": [
                586
            ],
            "on_LabeledEvent": [
                615
            ],
            "on_LockedEvent": [
                636
            ],
            "on_MilestonedEvent": [
                694
            ],
            "on_ReferencedEvent": [
                1018
            ],
            "on_RenamedTitleEvent": [
                1058
            ],
            "on_ReopenedEvent": [
                1066
            ],
            "on_SubscribedEvent": [
                1333
            ],
            "on_TransferredEvent": [
                1386
            ],
            "on_UnassignedEvent": [
                1394
            ],
            "on_UnlabeledEvent": [
                1401
            ],
            "on_UnlockedEvent": [
                1410
            ],
            "on_UnsubscribedEvent": [
                1429
            ],
            "on_UserBlockedEvent": [
                1556
            ],
            "on_Node": [
                704
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_GitObject": [
                551
            ],
            "on_Subscribable": [
                1331
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Minimizable": [
                695
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                602
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItems": {
            "on_AddedToProjectEvent": [
                56
            ],
            "on_AssignedEvent": [
                68
            ],
            "on_ClosedEvent": [
                164
            ],
            "on_CommentDeletedEvent": [
                175
            ],
            "on_ConnectedEvent": [
                199
            ],
            "on_ConvertedNoteToIssueEvent": [
                216
            ],
            "on_ConvertedToDiscussionEvent": [
                217
            ],
            "on_CrossReferencedEvent": [
                299
            ],
            "on_DemilestonedEvent": [
                360
            ],
            "on_DisconnectedEvent": [
                404
            ],
            "on_IssueComment": [
                586
            ],
            "on_LabeledEvent": [
                615
            ],
            "on_LockedEvent": [
                636
            ],
            "on_MarkedAsDuplicateEvent": [
                652
            ],
            "on_MentionedEvent": [
                666
            ],
            "on_MilestonedEvent": [
                694
            ],
            "on_MovedColumnsInProjectEvent": [
                702
            ],
            "on_PinnedEvent": [
                826
            ],
            "on_ReferencedEvent": [
                1018
            ],
            "on_RemovedFromProjectEvent": [
                1057
            ],
            "on_RenamedTitleEvent": [
                1058
            ],
            "on_ReopenedEvent": [
                1066
            ],
            "on_SubscribedEvent": [
                1333
            ],
            "on_TransferredEvent": [
                1386
            ],
            "on_UnassignedEvent": [
                1394
            ],
            "on_UnlabeledEvent": [
                1401
            ],
            "on_UnlockedEvent": [
                1410
            ],
            "on_UnmarkedAsDuplicateEvent": [
                1419
            ],
            "on_UnpinnedEvent": [
                1424
            ],
            "on_UnsubscribedEvent": [
                1429
            ],
            "on_UserBlockedEvent": [
                1556
            ],
            "on_Node": [
                704
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Minimizable": [
                695
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItemsConnection": {
            "edges": [
                606
            ],
            "filteredCount": [
                14
            ],
            "nodes": [
                604
            ],
            "pageCount": [
                14
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItemsEdge": {
            "cursor": [
                1
            ],
            "node": [
                604
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItemsItemType": {},
        "JoinedGitHubContribution": {
            "isRestricted": [
                4
            ],
            "occurredAt": [
                301
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "Label": {
            "color": [
                1
            ],
            "createdAt": [
                301
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "isDefault": [
                4
            ],
            "issues": [
                591,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        594
                    ],
                    "first": [
                        14
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        598,
                        "[IssueState!]"
                    ]
                }
            ],
            "name": [
                1
            ],
            "pullRequests": [
                953,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        977,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "LabelConnection": {
            "edges": [
                611
            ],
            "nodes": [
                609
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "LabelEdge": {
            "cursor": [
                1
            ],
            "node": [
                609
            ],
            "__typename": [
                1
            ]
        },
        "LabelOrder": {
            "direction": [
                712
            ],
            "field": [
                613
            ],
            "__typename": [
                1
            ]
        },
        "LabelOrderField": {},
        "Labelable": {
            "labels": [
                610,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        612
                    ]
                }
            ],
            "on_Discussion": [
                405
            ],
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "LabeledEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "label": [
                609
            ],
            "labelable": [
                614
            ],
            "__typename": [
                1
            ]
        },
        "Language": {
            "color": [
                1
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LanguageConnection": {
            "edges": [
                618
            ],
            "nodes": [
                616
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "totalSize": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "LanguageEdge": {
            "cursor": [
                1
            ],
            "node": [
                616
            ],
            "size": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "LanguageOrder": {
            "direction": [
                712
            ],
            "field": [
                620
            ],
            "__typename": [
                1
            ]
        },
        "LanguageOrderField": {},
        "License": {
            "body": [
                1
            ],
            "conditions": [
                622
            ],
            "description": [
                1
            ],
            "featured": [
                4
            ],
            "hidden": [
                4
            ],
            "id": [
                2
            ],
            "implementation": [
                1
            ],
            "key": [
                1
            ],
            "limitations": [
                622
            ],
            "name": [
                1
            ],
            "nickname": [
                1
            ],
            "permissions": [
                622
            ],
            "pseudoLicense": [
                4
            ],
            "spdxId": [
                1
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "LicenseRule": {
            "description": [
                1
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LinkProjectV2ToRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "LinkProjectV2ToRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "LinkProjectV2ToTeamInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "teamId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "LinkProjectV2ToTeamPayload": {
            "clientMutationId": [
                1
            ],
            "team": [
                1339
            ],
            "__typename": [
                1
            ]
        },
        "LinkRepositoryToProjectInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "LinkRepositoryToProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                835
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "LinkedBranch": {
            "id": [
                2
            ],
            "ref": [
                1009
            ],
            "__typename": [
                1
            ]
        },
        "LinkedBranchConnection": {
            "edges": [
                631
            ],
            "nodes": [
                629
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "LinkedBranchEdge": {
            "cursor": [
                1
            ],
            "node": [
                629
            ],
            "__typename": [
                1
            ]
        },
        "LockLockableInput": {
            "clientMutationId": [
                1
            ],
            "lockReason": [
                634
            ],
            "lockableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "LockLockablePayload": {
            "actor": [
                13
            ],
            "clientMutationId": [
                1
            ],
            "lockedRecord": [
                635
            ],
            "__typename": [
                1
            ]
        },
        "LockReason": {},
        "Lockable": {
            "activeLockReason": [
                634
            ],
            "locked": [
                4
            ],
            "on_Discussion": [
                405
            ],
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "LockedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "lockReason": [
                634
            ],
            "lockable": [
                635
            ],
            "__typename": [
                1
            ]
        },
        "Mannequin": {
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "claimant": [
                1554
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "login": [
                1
            ],
            "resourcePath": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "MannequinConnection": {
            "edges": [
                639
            ],
            "nodes": [
                637
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "MannequinEdge": {
            "cursor": [
                1
            ],
            "node": [
                637
            ],
            "__typename": [
                1
            ]
        },
        "MannequinOrder": {
            "direction": [
                712
            ],
            "field": [
                641
            ],
            "__typename": [
                1
            ]
        },
        "MannequinOrderField": {},
        "MarkDiscussionCommentAsAnswerInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MarkDiscussionCommentAsAnswerPayload": {
            "clientMutationId": [
                1
            ],
            "discussion": [
                405
            ],
            "__typename": [
                1
            ]
        },
        "MarkFileAsViewedInput": {
            "clientMutationId": [
                1
            ],
            "path": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MarkFileAsViewedPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "MarkNotificationAsDoneInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MarkNotificationAsDonePayload": {
            "clientMutationId": [
                1
            ],
            "success": [
                4
            ],
            "viewer": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "MarkProjectV2AsTemplateInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MarkProjectV2AsTemplatePayload": {
            "clientMutationId": [
                1
            ],
            "projectV2": [
                856
            ],
            "__typename": [
                1
            ]
        },
        "MarkPullRequestReadyForReviewInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MarkPullRequestReadyForReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "MarkedAsDuplicateEvent": {
            "actor": [
                13
            ],
            "canonical": [
                595
            ],
            "createdAt": [
                301
            ],
            "duplicate": [
                595
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceCategory": {
            "description": [
                1
            ],
            "howItWorks": [
                1
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "primaryListingCount": [
                14
            ],
            "resourcePath": [
                1389
            ],
            "secondaryListingCount": [
                14
            ],
            "slug": [
                1
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceListing": {
            "app": [
                58
            ],
            "companyUrl": [
                1389
            ],
            "configurationResourcePath": [
                1389
            ],
            "configurationUrl": [
                1389
            ],
            "documentationUrl": [
                1389
            ],
            "extendedDescription": [
                1
            ],
            "extendedDescriptionHTML": [
                563
            ],
            "fullDescription": [
                1
            ],
            "fullDescriptionHTML": [
                563
            ],
            "hasPublishedFreeTrialPlans": [
                4
            ],
            "hasTermsOfService": [
                4
            ],
            "hasVerifiedOwner": [
                4
            ],
            "howItWorks": [
                1
            ],
            "howItWorksHTML": [
                563
            ],
            "id": [
                2
            ],
            "installationUrl": [
                1389
            ],
            "installedForViewer": [
                4
            ],
            "isArchived": [
                4
            ],
            "isDraft": [
                4
            ],
            "isPaid": [
                4
            ],
            "isPublic": [
                4
            ],
            "isRejected": [
                4
            ],
            "isUnverified": [
                4
            ],
            "isUnverifiedPending": [
                4
            ],
            "isVerificationPendingFromDraft": [
                4
            ],
            "isVerificationPendingFromUnverified": [
                4
            ],
            "isVerified": [
                4
            ],
            "logoBackgroundColor": [
                1
            ],
            "logoUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "name": [
                1
            ],
            "normalizedShortDescription": [
                1
            ],
            "pricingUrl": [
                1389
            ],
            "primaryCategory": [
                653
            ],
            "privacyPolicyUrl": [
                1389
            ],
            "resourcePath": [
                1389
            ],
            "screenshotUrls": [
                1
            ],
            "secondaryCategory": [
                653
            ],
            "shortDescription": [
                1
            ],
            "slug": [
                1
            ],
            "statusUrl": [
                1389
            ],
            "supportEmail": [
                1
            ],
            "supportUrl": [
                1389
            ],
            "termsOfServiceUrl": [
                1389
            ],
            "url": [
                1389
            ],
            "viewerCanAddPlans": [
                4
            ],
            "viewerCanApprove": [
                4
            ],
            "viewerCanDelist": [
                4
            ],
            "viewerCanEdit": [
                4
            ],
            "viewerCanEditCategories": [
                4
            ],
            "viewerCanEditPlans": [
                4
            ],
            "viewerCanRedraft": [
                4
            ],
            "viewerCanReject": [
                4
            ],
            "viewerCanRequestApproval": [
                4
            ],
            "viewerHasPurchased": [
                4
            ],
            "viewerHasPurchasedForAllOrganizations": [
                4
            ],
            "viewerIsListingAdmin": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceListingConnection": {
            "edges": [
                656
            ],
            "nodes": [
                654
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceListingEdge": {
            "cursor": [
                1
            ],
            "node": [
                654
            ],
            "__typename": [
                1
            ]
        },
        "MaxFilePathLengthParameters": {
            "maxFilePathLength": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "MaxFilePathLengthParametersInput": {
            "maxFilePathLength": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "MaxFileSizeParameters": {
            "maxFileSize": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "MaxFileSizeParametersInput": {
            "maxFileSize": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "MemberFeatureRequestNotification": {
            "body": [
                1
            ],
            "id": [
                2
            ],
            "title": [
                1
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "MemberStatusable": {
            "memberStatuses": [
                1571,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1573
                    ]
                }
            ],
            "on_Organization": [
                757
            ],
            "on_Team": [
                1339
            ],
            "__typename": [
                1
            ]
        },
        "MembersCanDeleteReposClearAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "enterpriseResourcePath": [
                1389
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                1389
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "MembersCanDeleteReposDisableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "enterpriseResourcePath": [
                1389
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                1389
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "MembersCanDeleteReposEnableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "enterpriseResourcePath": [
                1389
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                1389
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "MentionedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MergeBranchInput": {
            "authorEmail": [
                1
            ],
            "base": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "commitMessage": [
                1
            ],
            "head": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MergeBranchPayload": {
            "clientMutationId": [
                1
            ],
            "mergeCommit": [
                176
            ],
            "__typename": [
                1
            ]
        },
        "MergeCommitMessage": {},
        "MergeCommitTitle": {},
        "MergePullRequestInput": {
            "authorEmail": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "commitBody": [
                1
            ],
            "commitHeadline": [
                1
            ],
            "expectedHeadOid": [
                552
            ],
            "mergeMethod": [
                956
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MergePullRequestPayload": {
            "actor": [
                13
            ],
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "MergeQueue": {
            "configuration": [
                674
            ],
            "entries": [
                676,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "id": [
                2
            ],
            "nextEntryEstimatedTimeToMerge": [
                14
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "MergeQueueConfiguration": {
            "checkResponseTimeout": [
                14
            ],
            "maximumEntriesToBuild": [
                14
            ],
            "maximumEntriesToMerge": [
                14
            ],
            "mergeMethod": [
                956
            ],
            "mergingStrategy": [
                679
            ],
            "minimumEntriesToMerge": [
                14
            ],
            "minimumEntriesToMergeWaitTime": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "MergeQueueEntry": {
            "baseCommit": [
                176
            ],
            "enqueuedAt": [
                301
            ],
            "enqueuer": [
                13
            ],
            "estimatedTimeToMerge": [
                14
            ],
            "headCommit": [
                176
            ],
            "id": [
                2
            ],
            "jump": [
                4
            ],
            "mergeQueue": [
                673
            ],
            "position": [
                14
            ],
            "pullRequest": [
                944
            ],
            "solo": [
                4
            ],
            "state": [
                678
            ],
            "__typename": [
                1
            ]
        },
        "MergeQueueEntryConnection": {
            "edges": [
                677
            ],
            "nodes": [
                675
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "MergeQueueEntryEdge": {
            "cursor": [
                1
            ],
            "node": [
                675
            ],
            "__typename": [
                1
            ]
        },
        "MergeQueueEntryState": {},
        "MergeQueueMergingStrategy": {},
        "MergeStateStatus": {},
        "MergeableState": {},
        "MergedEvent": {
            "actor": [
                13
            ],
            "commit": [
                176
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "mergeRef": [
                1009
            ],
            "mergeRefName": [
                1
            ],
            "pullRequest": [
                944
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "Migration": {
            "continueOnError": [
                4
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                1
            ],
            "failureReason": [
                1
            ],
            "id": [
                2
            ],
            "migrationLogUrl": [
                1389
            ],
            "migrationSource": [
                684
            ],
            "repositoryName": [
                1
            ],
            "sourceUrl": [
                1389
            ],
            "state": [
                686
            ],
            "warningsCount": [
                14
            ],
            "on_RepositoryMigration": [
                1122
            ],
            "__typename": [
                1
            ]
        },
        "MigrationSource": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "type": [
                685
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "MigrationSourceType": {},
        "MigrationState": {},
        "Milestone": {
            "closed": [
                4
            ],
            "closedAt": [
                301
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "description": [
                1
            ],
            "dueOn": [
                301
            ],
            "id": [
                2
            ],
            "issues": [
                591,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        594
                    ],
                    "first": [
                        14
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        598,
                        "[IssueState!]"
                    ]
                }
            ],
            "number": [
                14
            ],
            "progressPercentage": [
                108
            ],
            "pullRequests": [
                953,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        977,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "state": [
                693
            ],
            "title": [
                1
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "viewerCanClose": [
                4
            ],
            "viewerCanReopen": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneConnection": {
            "edges": [
                689
            ],
            "nodes": [
                687
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneEdge": {
            "cursor": [
                1
            ],
            "node": [
                687
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneItem": {
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "on_Assignable": [
                67
            ],
            "on_Closable": [
                157
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Labelable": [
                614
            ],
            "on_Lockable": [
                635
            ],
            "on_Node": [
                704
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Subscribable": [
                1331
            ],
            "on_SubscribableThread": [
                1332
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneOrder": {
            "direction": [
                712
            ],
            "field": [
                692
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneOrderField": {},
        "MilestoneState": {},
        "MilestonedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "milestoneTitle": [
                1
            ],
            "subject": [
                690
            ],
            "__typename": [
                1
            ]
        },
        "Minimizable": {
            "isMinimized": [
                4
            ],
            "minimizedReason": [
                1
            ],
            "viewerCanMinimize": [
                4
            ],
            "on_CommitComment": [
                180
            ],
            "on_DiscussionComment": [
                410
            ],
            "on_GistComment": [
                538
            ],
            "on_IssueComment": [
                586
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewComment": [
                962
            ],
            "__typename": [
                1
            ]
        },
        "MinimizeCommentInput": {
            "classifier": [
                1095
            ],
            "clientMutationId": [
                1
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MinimizeCommentPayload": {
            "clientMutationId": [
                1
            ],
            "minimizedComment": [
                695
            ],
            "__typename": [
                1
            ]
        },
        "MoveProjectCardInput": {
            "afterCardId": [
                2
            ],
            "cardId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "columnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MoveProjectCardPayload": {
            "cardEdge": [
                839
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MoveProjectColumnInput": {
            "afterColumnId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "columnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MoveProjectColumnPayload": {
            "clientMutationId": [
                1
            ],
            "columnEdge": [
                845
            ],
            "__typename": [
                1
            ]
        },
        "MovedColumnsInProjectEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "previousProjectColumnName": [
                1
            ],
            "project": [
                835
            ],
            "projectCard": [
                836
            ],
            "projectColumnName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Mutation": {
            "abortQueuedMigrations": [
                3,
                {
                    "input": [
                        0,
                        "AbortQueuedMigrationsInput!"
                    ]
                }
            ],
            "abortRepositoryMigration": [
                6,
                {
                    "input": [
                        5,
                        "AbortRepositoryMigrationInput!"
                    ]
                }
            ],
            "acceptEnterpriseAdministratorInvitation": [
                8,
                {
                    "input": [
                        7,
                        "AcceptEnterpriseAdministratorInvitationInput!"
                    ]
                }
            ],
            "acceptEnterpriseMemberInvitation": [
                10,
                {
                    "input": [
                        9,
                        "AcceptEnterpriseMemberInvitationInput!"
                    ]
                }
            ],
            "acceptTopicSuggestion": [
                12,
                {
                    "input": [
                        11,
                        "AcceptTopicSuggestionInput!"
                    ]
                }
            ],
            "addAssigneesToAssignable": [
                18,
                {
                    "input": [
                        17,
                        "AddAssigneesToAssignableInput!"
                    ]
                }
            ],
            "addComment": [
                20,
                {
                    "input": [
                        19,
                        "AddCommentInput!"
                    ]
                }
            ],
            "addDiscussionComment": [
                22,
                {
                    "input": [
                        21,
                        "AddDiscussionCommentInput!"
                    ]
                }
            ],
            "addDiscussionPollVote": [
                24,
                {
                    "input": [
                        23,
                        "AddDiscussionPollVoteInput!"
                    ]
                }
            ],
            "addEnterpriseOrganizationMember": [
                26,
                {
                    "input": [
                        25,
                        "AddEnterpriseOrganizationMemberInput!"
                    ]
                }
            ],
            "addEnterpriseSupportEntitlement": [
                28,
                {
                    "input": [
                        27,
                        "AddEnterpriseSupportEntitlementInput!"
                    ]
                }
            ],
            "addLabelsToLabelable": [
                30,
                {
                    "input": [
                        29,
                        "AddLabelsToLabelableInput!"
                    ]
                }
            ],
            "addProjectCard": [
                32,
                {
                    "input": [
                        31,
                        "AddProjectCardInput!"
                    ]
                }
            ],
            "addProjectColumn": [
                34,
                {
                    "input": [
                        33,
                        "AddProjectColumnInput!"
                    ]
                }
            ],
            "addProjectV2DraftIssue": [
                36,
                {
                    "input": [
                        35,
                        "AddProjectV2DraftIssueInput!"
                    ]
                }
            ],
            "addProjectV2ItemById": [
                38,
                {
                    "input": [
                        37,
                        "AddProjectV2ItemByIdInput!"
                    ]
                }
            ],
            "addPullRequestReview": [
                42,
                {
                    "input": [
                        41,
                        "AddPullRequestReviewInput!"
                    ]
                }
            ],
            "addPullRequestReviewComment": [
                40,
                {
                    "input": [
                        39,
                        "AddPullRequestReviewCommentInput!"
                    ]
                }
            ],
            "addPullRequestReviewThread": [
                44,
                {
                    "input": [
                        43,
                        "AddPullRequestReviewThreadInput!"
                    ]
                }
            ],
            "addPullRequestReviewThreadReply": [
                46,
                {
                    "input": [
                        45,
                        "AddPullRequestReviewThreadReplyInput!"
                    ]
                }
            ],
            "addReaction": [
                48,
                {
                    "input": [
                        47,
                        "AddReactionInput!"
                    ]
                }
            ],
            "addStar": [
                50,
                {
                    "input": [
                        49,
                        "AddStarInput!"
                    ]
                }
            ],
            "addUpvote": [
                52,
                {
                    "input": [
                        51,
                        "AddUpvoteInput!"
                    ]
                }
            ],
            "addVerifiableDomain": [
                54,
                {
                    "input": [
                        53,
                        "AddVerifiableDomainInput!"
                    ]
                }
            ],
            "approveDeployments": [
                60,
                {
                    "input": [
                        59,
                        "ApproveDeploymentsInput!"
                    ]
                }
            ],
            "approveVerifiableDomain": [
                62,
                {
                    "input": [
                        61,
                        "ApproveVerifiableDomainInput!"
                    ]
                }
            ],
            "archiveProjectV2Item": [
                64,
                {
                    "input": [
                        63,
                        "ArchiveProjectV2ItemInput!"
                    ]
                }
            ],
            "archiveRepository": [
                66,
                {
                    "input": [
                        65,
                        "ArchiveRepositoryInput!"
                    ]
                }
            ],
            "cancelEnterpriseAdminInvitation": [
                113,
                {
                    "input": [
                        112,
                        "CancelEnterpriseAdminInvitationInput!"
                    ]
                }
            ],
            "cancelEnterpriseMemberInvitation": [
                115,
                {
                    "input": [
                        114,
                        "CancelEnterpriseMemberInvitationInput!"
                    ]
                }
            ],
            "cancelSponsorship": [
                117,
                {
                    "input": [
                        116,
                        "CancelSponsorshipInput!"
                    ]
                }
            ],
            "changeUserStatus": [
                119,
                {
                    "input": [
                        118,
                        "ChangeUserStatusInput!"
                    ]
                }
            ],
            "clearLabelsFromLabelable": [
                150,
                {
                    "input": [
                        149,
                        "ClearLabelsFromLabelableInput!"
                    ]
                }
            ],
            "clearProjectV2ItemFieldValue": [
                152,
                {
                    "input": [
                        151,
                        "ClearProjectV2ItemFieldValueInput!"
                    ]
                }
            ],
            "cloneProject": [
                154,
                {
                    "input": [
                        153,
                        "CloneProjectInput!"
                    ]
                }
            ],
            "cloneTemplateRepository": [
                156,
                {
                    "input": [
                        155,
                        "CloneTemplateRepositoryInput!"
                    ]
                }
            ],
            "closeDiscussion": [
                159,
                {
                    "input": [
                        158,
                        "CloseDiscussionInput!"
                    ]
                }
            ],
            "closeIssue": [
                161,
                {
                    "input": [
                        160,
                        "CloseIssueInput!"
                    ]
                }
            ],
            "closePullRequest": [
                163,
                {
                    "input": [
                        162,
                        "ClosePullRequestInput!"
                    ]
                }
            ],
            "convertProjectCardNoteToIssue": [
                210,
                {
                    "input": [
                        209,
                        "ConvertProjectCardNoteToIssueInput!"
                    ]
                }
            ],
            "convertProjectV2DraftIssueItemToIssue": [
                212,
                {
                    "input": [
                        211,
                        "ConvertProjectV2DraftIssueItemToIssueInput!"
                    ]
                }
            ],
            "convertPullRequestToDraft": [
                214,
                {
                    "input": [
                        213,
                        "ConvertPullRequestToDraftInput!"
                    ]
                }
            ],
            "copyProjectV2": [
                220,
                {
                    "input": [
                        219,
                        "CopyProjectV2Input!"
                    ]
                }
            ],
            "createAttributionInvitation": [
                222,
                {
                    "input": [
                        221,
                        "CreateAttributionInvitationInput!"
                    ]
                }
            ],
            "createBranchProtectionRule": [
                224,
                {
                    "input": [
                        223,
                        "CreateBranchProtectionRuleInput!"
                    ]
                }
            ],
            "createCheckRun": [
                226,
                {
                    "input": [
                        225,
                        "CreateCheckRunInput!"
                    ]
                }
            ],
            "createCheckSuite": [
                228,
                {
                    "input": [
                        227,
                        "CreateCheckSuiteInput!"
                    ]
                }
            ],
            "createCommitOnBranch": [
                230,
                {
                    "input": [
                        229,
                        "CreateCommitOnBranchInput!"
                    ]
                }
            ],
            "createDeployment": [
                232,
                {
                    "input": [
                        231,
                        "CreateDeploymentInput!"
                    ]
                }
            ],
            "createDeploymentStatus": [
                234,
                {
                    "input": [
                        233,
                        "CreateDeploymentStatusInput!"
                    ]
                }
            ],
            "createDiscussion": [
                236,
                {
                    "input": [
                        235,
                        "CreateDiscussionInput!"
                    ]
                }
            ],
            "createEnterpriseOrganization": [
                238,
                {
                    "input": [
                        237,
                        "CreateEnterpriseOrganizationInput!"
                    ]
                }
            ],
            "createEnvironment": [
                240,
                {
                    "input": [
                        239,
                        "CreateEnvironmentInput!"
                    ]
                }
            ],
            "createIpAllowListEntry": [
                242,
                {
                    "input": [
                        241,
                        "CreateIpAllowListEntryInput!"
                    ]
                }
            ],
            "createIssue": [
                244,
                {
                    "input": [
                        243,
                        "CreateIssueInput!"
                    ]
                }
            ],
            "createLabel": [
                246,
                {
                    "input": [
                        245,
                        "CreateLabelInput!"
                    ]
                }
            ],
            "createLinkedBranch": [
                248,
                {
                    "input": [
                        247,
                        "CreateLinkedBranchInput!"
                    ]
                }
            ],
            "createMigrationSource": [
                250,
                {
                    "input": [
                        249,
                        "CreateMigrationSourceInput!"
                    ]
                }
            ],
            "createProject": [
                252,
                {
                    "input": [
                        251,
                        "CreateProjectInput!"
                    ]
                }
            ],
            "createProjectV2": [
                256,
                {
                    "input": [
                        255,
                        "CreateProjectV2Input!"
                    ]
                }
            ],
            "createProjectV2Field": [
                254,
                {
                    "input": [
                        253,
                        "CreateProjectV2FieldInput!"
                    ]
                }
            ],
            "createProjectV2StatusUpdate": [
                258,
                {
                    "input": [
                        257,
                        "CreateProjectV2StatusUpdateInput!"
                    ]
                }
            ],
            "createPullRequest": [
                260,
                {
                    "input": [
                        259,
                        "CreatePullRequestInput!"
                    ]
                }
            ],
            "createRef": [
                262,
                {
                    "input": [
                        261,
                        "CreateRefInput!"
                    ]
                }
            ],
            "createRepository": [
                264,
                {
                    "input": [
                        263,
                        "CreateRepositoryInput!"
                    ]
                }
            ],
            "createRepositoryRuleset": [
                266,
                {
                    "input": [
                        265,
                        "CreateRepositoryRulesetInput!"
                    ]
                }
            ],
            "createSponsorsListing": [
                268,
                {
                    "input": [
                        267,
                        "CreateSponsorsListingInput!"
                    ]
                }
            ],
            "createSponsorsTier": [
                270,
                {
                    "input": [
                        269,
                        "CreateSponsorsTierInput!"
                    ]
                }
            ],
            "createSponsorship": [
                272,
                {
                    "input": [
                        271,
                        "CreateSponsorshipInput!"
                    ]
                }
            ],
            "createSponsorships": [
                274,
                {
                    "input": [
                        273,
                        "CreateSponsorshipsInput!"
                    ]
                }
            ],
            "createTeamDiscussion": [
                278,
                {
                    "input": [
                        277,
                        "CreateTeamDiscussionInput!"
                    ]
                }
            ],
            "createTeamDiscussionComment": [
                276,
                {
                    "input": [
                        275,
                        "CreateTeamDiscussionCommentInput!"
                    ]
                }
            ],
            "createUserList": [
                280,
                {
                    "input": [
                        279,
                        "CreateUserListInput!"
                    ]
                }
            ],
            "declineTopicSuggestion": [
                303,
                {
                    "input": [
                        302,
                        "DeclineTopicSuggestionInput!"
                    ]
                }
            ],
            "deleteBranchProtectionRule": [
                307,
                {
                    "input": [
                        306,
                        "DeleteBranchProtectionRuleInput!"
                    ]
                }
            ],
            "deleteDeployment": [
                309,
                {
                    "input": [
                        308,
                        "DeleteDeploymentInput!"
                    ]
                }
            ],
            "deleteDiscussion": [
                313,
                {
                    "input": [
                        312,
                        "DeleteDiscussionInput!"
                    ]
                }
            ],
            "deleteDiscussionComment": [
                311,
                {
                    "input": [
                        310,
                        "DeleteDiscussionCommentInput!"
                    ]
                }
            ],
            "deleteEnvironment": [
                315,
                {
                    "input": [
                        314,
                        "DeleteEnvironmentInput!"
                    ]
                }
            ],
            "deleteIpAllowListEntry": [
                317,
                {
                    "input": [
                        316,
                        "DeleteIpAllowListEntryInput!"
                    ]
                }
            ],
            "deleteIssue": [
                321,
                {
                    "input": [
                        320,
                        "DeleteIssueInput!"
                    ]
                }
            ],
            "deleteIssueComment": [
                319,
                {
                    "input": [
                        318,
                        "DeleteIssueCommentInput!"
                    ]
                }
            ],
            "deleteLabel": [
                323,
                {
                    "input": [
                        322,
                        "DeleteLabelInput!"
                    ]
                }
            ],
            "deleteLinkedBranch": [
                325,
                {
                    "input": [
                        324,
                        "DeleteLinkedBranchInput!"
                    ]
                }
            ],
            "deletePackageVersion": [
                327,
                {
                    "input": [
                        326,
                        "DeletePackageVersionInput!"
                    ]
                }
            ],
            "deleteProject": [
                333,
                {
                    "input": [
                        332,
                        "DeleteProjectInput!"
                    ]
                }
            ],
            "deleteProjectCard": [
                329,
                {
                    "input": [
                        328,
                        "DeleteProjectCardInput!"
                    ]
                }
            ],
            "deleteProjectColumn": [
                331,
                {
                    "input": [
                        330,
                        "DeleteProjectColumnInput!"
                    ]
                }
            ],
            "deleteProjectV2": [
                339,
                {
                    "input": [
                        336,
                        "DeleteProjectV2Input!"
                    ]
                }
            ],
            "deleteProjectV2Field": [
                335,
                {
                    "input": [
                        334,
                        "DeleteProjectV2FieldInput!"
                    ]
                }
            ],
            "deleteProjectV2Item": [
                338,
                {
                    "input": [
                        337,
                        "DeleteProjectV2ItemInput!"
                    ]
                }
            ],
            "deleteProjectV2StatusUpdate": [
                341,
                {
                    "input": [
                        340,
                        "DeleteProjectV2StatusUpdateInput!"
                    ]
                }
            ],
            "deleteProjectV2Workflow": [
                343,
                {
                    "input": [
                        342,
                        "DeleteProjectV2WorkflowInput!"
                    ]
                }
            ],
            "deletePullRequestReview": [
                347,
                {
                    "input": [
                        346,
                        "DeletePullRequestReviewInput!"
                    ]
                }
            ],
            "deletePullRequestReviewComment": [
                345,
                {
                    "input": [
                        344,
                        "DeletePullRequestReviewCommentInput!"
                    ]
                }
            ],
            "deleteRef": [
                349,
                {
                    "input": [
                        348,
                        "DeleteRefInput!"
                    ]
                }
            ],
            "deleteRepositoryRuleset": [
                351,
                {
                    "input": [
                        350,
                        "DeleteRepositoryRulesetInput!"
                    ]
                }
            ],
            "deleteTeamDiscussion": [
                355,
                {
                    "input": [
                        354,
                        "DeleteTeamDiscussionInput!"
                    ]
                }
            ],
            "deleteTeamDiscussionComment": [
                353,
                {
                    "input": [
                        352,
                        "DeleteTeamDiscussionCommentInput!"
                    ]
                }
            ],
            "deleteUserList": [
                357,
                {
                    "input": [
                        356,
                        "DeleteUserListInput!"
                    ]
                }
            ],
            "deleteVerifiableDomain": [
                359,
                {
                    "input": [
                        358,
                        "DeleteVerifiableDomainInput!"
                    ]
                }
            ],
            "dequeuePullRequest": [
                400,
                {
                    "input": [
                        399,
                        "DequeuePullRequestInput!"
                    ]
                }
            ],
            "disablePullRequestAutoMerge": [
                403,
                {
                    "input": [
                        402,
                        "DisablePullRequestAutoMergeInput!"
                    ]
                }
            ],
            "dismissPullRequestReview": [
                426,
                {
                    "input": [
                        425,
                        "DismissPullRequestReviewInput!"
                    ]
                }
            ],
            "dismissRepositoryVulnerabilityAlert": [
                429,
                {
                    "input": [
                        428,
                        "DismissRepositoryVulnerabilityAlertInput!"
                    ]
                }
            ],
            "enablePullRequestAutoMerge": [
                434,
                {
                    "input": [
                        433,
                        "EnablePullRequestAutoMergeInput!"
                    ]
                }
            ],
            "enqueuePullRequest": [
                436,
                {
                    "input": [
                        435,
                        "EnqueuePullRequestInput!"
                    ]
                }
            ],
            "followOrganization": [
                529,
                {
                    "input": [
                        528,
                        "FollowOrganizationInput!"
                    ]
                }
            ],
            "followUser": [
                531,
                {
                    "input": [
                        530,
                        "FollowUserInput!"
                    ]
                }
            ],
            "grantEnterpriseOrganizationsMigratorRole": [
                560,
                {
                    "input": [
                        559,
                        "GrantEnterpriseOrganizationsMigratorRoleInput!"
                    ]
                }
            ],
            "grantMigratorRole": [
                562,
                {
                    "input": [
                        561,
                        "GrantMigratorRoleInput!"
                    ]
                }
            ],
            "importProject": [
                571,
                {
                    "input": [
                        570,
                        "ImportProjectInput!"
                    ]
                }
            ],
            "inviteEnterpriseAdmin": [
                573,
                {
                    "input": [
                        572,
                        "InviteEnterpriseAdminInput!"
                    ]
                }
            ],
            "inviteEnterpriseMember": [
                575,
                {
                    "input": [
                        574,
                        "InviteEnterpriseMemberInput!"
                    ]
                }
            ],
            "linkProjectV2ToRepository": [
                624,
                {
                    "input": [
                        623,
                        "LinkProjectV2ToRepositoryInput!"
                    ]
                }
            ],
            "linkProjectV2ToTeam": [
                626,
                {
                    "input": [
                        625,
                        "LinkProjectV2ToTeamInput!"
                    ]
                }
            ],
            "linkRepositoryToProject": [
                628,
                {
                    "input": [
                        627,
                        "LinkRepositoryToProjectInput!"
                    ]
                }
            ],
            "lockLockable": [
                633,
                {
                    "input": [
                        632,
                        "LockLockableInput!"
                    ]
                }
            ],
            "markDiscussionCommentAsAnswer": [
                643,
                {
                    "input": [
                        642,
                        "MarkDiscussionCommentAsAnswerInput!"
                    ]
                }
            ],
            "markFileAsViewed": [
                645,
                {
                    "input": [
                        644,
                        "MarkFileAsViewedInput!"
                    ]
                }
            ],
            "markNotificationAsDone": [
                647,
                {
                    "input": [
                        646,
                        "MarkNotificationAsDoneInput!"
                    ]
                }
            ],
            "markProjectV2AsTemplate": [
                649,
                {
                    "input": [
                        648,
                        "MarkProjectV2AsTemplateInput!"
                    ]
                }
            ],
            "markPullRequestReadyForReview": [
                651,
                {
                    "input": [
                        650,
                        "MarkPullRequestReadyForReviewInput!"
                    ]
                }
            ],
            "mergeBranch": [
                668,
                {
                    "input": [
                        667,
                        "MergeBranchInput!"
                    ]
                }
            ],
            "mergePullRequest": [
                672,
                {
                    "input": [
                        671,
                        "MergePullRequestInput!"
                    ]
                }
            ],
            "minimizeComment": [
                697,
                {
                    "input": [
                        696,
                        "MinimizeCommentInput!"
                    ]
                }
            ],
            "moveProjectCard": [
                699,
                {
                    "input": [
                        698,
                        "MoveProjectCardInput!"
                    ]
                }
            ],
            "moveProjectColumn": [
                701,
                {
                    "input": [
                        700,
                        "MoveProjectColumnInput!"
                    ]
                }
            ],
            "pinEnvironment": [
                809,
                {
                    "input": [
                        808,
                        "PinEnvironmentInput!"
                    ]
                }
            ],
            "pinIssue": [
                811,
                {
                    "input": [
                        810,
                        "PinIssueInput!"
                    ]
                }
            ],
            "publishSponsorsTier": [
                943,
                {
                    "input": [
                        942,
                        "PublishSponsorsTierInput!"
                    ]
                }
            ],
            "regenerateEnterpriseIdentityProviderRecoveryCodes": [
                1021,
                {
                    "input": [
                        1020,
                        "RegenerateEnterpriseIdentityProviderRecoveryCodesInput!"
                    ]
                }
            ],
            "regenerateVerifiableDomainToken": [
                1023,
                {
                    "input": [
                        1022,
                        "RegenerateVerifiableDomainTokenInput!"
                    ]
                }
            ],
            "rejectDeployments": [
                1025,
                {
                    "input": [
                        1024,
                        "RejectDeploymentsInput!"
                    ]
                }
            ],
            "removeAssigneesFromAssignable": [
                1035,
                {
                    "input": [
                        1034,
                        "RemoveAssigneesFromAssignableInput!"
                    ]
                }
            ],
            "removeEnterpriseAdmin": [
                1037,
                {
                    "input": [
                        1036,
                        "RemoveEnterpriseAdminInput!"
                    ]
                }
            ],
            "removeEnterpriseIdentityProvider": [
                1039,
                {
                    "input": [
                        1038,
                        "RemoveEnterpriseIdentityProviderInput!"
                    ]
                }
            ],
            "removeEnterpriseMember": [
                1041,
                {
                    "input": [
                        1040,
                        "RemoveEnterpriseMemberInput!"
                    ]
                }
            ],
            "removeEnterpriseOrganization": [
                1043,
                {
                    "input": [
                        1042,
                        "RemoveEnterpriseOrganizationInput!"
                    ]
                }
            ],
            "removeEnterpriseSupportEntitlement": [
                1045,
                {
                    "input": [
                        1044,
                        "RemoveEnterpriseSupportEntitlementInput!"
                    ]
                }
            ],
            "removeLabelsFromLabelable": [
                1047,
                {
                    "input": [
                        1046,
                        "RemoveLabelsFromLabelableInput!"
                    ]
                }
            ],
            "removeOutsideCollaborator": [
                1049,
                {
                    "input": [
                        1048,
                        "RemoveOutsideCollaboratorInput!"
                    ]
                }
            ],
            "removeReaction": [
                1051,
                {
                    "input": [
                        1050,
                        "RemoveReactionInput!"
                    ]
                }
            ],
            "removeStar": [
                1053,
                {
                    "input": [
                        1052,
                        "RemoveStarInput!"
                    ]
                }
            ],
            "removeUpvote": [
                1055,
                {
                    "input": [
                        1054,
                        "RemoveUpvoteInput!"
                    ]
                }
            ],
            "reopenDiscussion": [
                1061,
                {
                    "input": [
                        1060,
                        "ReopenDiscussionInput!"
                    ]
                }
            ],
            "reopenIssue": [
                1063,
                {
                    "input": [
                        1062,
                        "ReopenIssueInput!"
                    ]
                }
            ],
            "reopenPullRequest": [
                1065,
                {
                    "input": [
                        1064,
                        "ReopenPullRequestInput!"
                    ]
                }
            ],
            "reorderEnvironment": [
                1068,
                {
                    "input": [
                        1067,
                        "ReorderEnvironmentInput!"
                    ]
                }
            ],
            "requestReviews": [
                1169,
                {
                    "input": [
                        1168,
                        "RequestReviewsInput!"
                    ]
                }
            ],
            "rerequestCheckSuite": [
                1182,
                {
                    "input": [
                        1181,
                        "RerequestCheckSuiteInput!"
                    ]
                }
            ],
            "resolveReviewThread": [
                1184,
                {
                    "input": [
                        1183,
                        "ResolveReviewThreadInput!"
                    ]
                }
            ],
            "retireSponsorsTier": [
                1187,
                {
                    "input": [
                        1186,
                        "RetireSponsorsTierInput!"
                    ]
                }
            ],
            "revertPullRequest": [
                1189,
                {
                    "input": [
                        1188,
                        "RevertPullRequestInput!"
                    ]
                }
            ],
            "revokeEnterpriseOrganizationsMigratorRole": [
                1202,
                {
                    "input": [
                        1201,
                        "RevokeEnterpriseOrganizationsMigratorRoleInput!"
                    ]
                }
            ],
            "revokeMigratorRole": [
                1204,
                {
                    "input": [
                        1203,
                        "RevokeMigratorRoleInput!"
                    ]
                }
            ],
            "setEnterpriseIdentityProvider": [
                1241,
                {
                    "input": [
                        1240,
                        "SetEnterpriseIdentityProviderInput!"
                    ]
                }
            ],
            "setOrganizationInteractionLimit": [
                1243,
                {
                    "input": [
                        1242,
                        "SetOrganizationInteractionLimitInput!"
                    ]
                }
            ],
            "setRepositoryInteractionLimit": [
                1245,
                {
                    "input": [
                        1244,
                        "SetRepositoryInteractionLimitInput!"
                    ]
                }
            ],
            "setUserInteractionLimit": [
                1247,
                {
                    "input": [
                        1246,
                        "SetUserInteractionLimitInput!"
                    ]
                }
            ],
            "startOrganizationMigration": [
                1312,
                {
                    "input": [
                        1311,
                        "StartOrganizationMigrationInput!"
                    ]
                }
            ],
            "startRepositoryMigration": [
                1314,
                {
                    "input": [
                        1313,
                        "StartRepositoryMigrationInput!"
                    ]
                }
            ],
            "submitPullRequestReview": [
                1327,
                {
                    "input": [
                        1326,
                        "SubmitPullRequestReviewInput!"
                    ]
                }
            ],
            "transferEnterpriseOrganization": [
                1383,
                {
                    "input": [
                        1382,
                        "TransferEnterpriseOrganizationInput!"
                    ]
                }
            ],
            "transferIssue": [
                1385,
                {
                    "input": [
                        1384,
                        "TransferIssueInput!"
                    ]
                }
            ],
            "unarchiveProjectV2Item": [
                1391,
                {
                    "input": [
                        1390,
                        "UnarchiveProjectV2ItemInput!"
                    ]
                }
            ],
            "unarchiveRepository": [
                1393,
                {
                    "input": [
                        1392,
                        "UnarchiveRepositoryInput!"
                    ]
                }
            ],
            "unfollowOrganization": [
                1396,
                {
                    "input": [
                        1395,
                        "UnfollowOrganizationInput!"
                    ]
                }
            ],
            "unfollowUser": [
                1398,
                {
                    "input": [
                        1397,
                        "UnfollowUserInput!"
                    ]
                }
            ],
            "unlinkProjectV2FromRepository": [
                1403,
                {
                    "input": [
                        1402,
                        "UnlinkProjectV2FromRepositoryInput!"
                    ]
                }
            ],
            "unlinkProjectV2FromTeam": [
                1405,
                {
                    "input": [
                        1404,
                        "UnlinkProjectV2FromTeamInput!"
                    ]
                }
            ],
            "unlinkRepositoryFromProject": [
                1407,
                {
                    "input": [
                        1406,
                        "UnlinkRepositoryFromProjectInput!"
                    ]
                }
            ],
            "unlockLockable": [
                1409,
                {
                    "input": [
                        1408,
                        "UnlockLockableInput!"
                    ]
                }
            ],
            "unmarkDiscussionCommentAsAnswer": [
                1412,
                {
                    "input": [
                        1411,
                        "UnmarkDiscussionCommentAsAnswerInput!"
                    ]
                }
            ],
            "unmarkFileAsViewed": [
                1414,
                {
                    "input": [
                        1413,
                        "UnmarkFileAsViewedInput!"
                    ]
                }
            ],
            "unmarkIssueAsDuplicate": [
                1416,
                {
                    "input": [
                        1415,
                        "UnmarkIssueAsDuplicateInput!"
                    ]
                }
            ],
            "unmarkProjectV2AsTemplate": [
                1418,
                {
                    "input": [
                        1417,
                        "UnmarkProjectV2AsTemplateInput!"
                    ]
                }
            ],
            "unminimizeComment": [
                1421,
                {
                    "input": [
                        1420,
                        "UnminimizeCommentInput!"
                    ]
                }
            ],
            "unpinIssue": [
                1423,
                {
                    "input": [
                        1422,
                        "UnpinIssueInput!"
                    ]
                }
            ],
            "unresolveReviewThread": [
                1426,
                {
                    "input": [
                        1425,
                        "UnresolveReviewThreadInput!"
                    ]
                }
            ],
            "unsubscribeFromNotifications": [
                1428,
                {
                    "input": [
                        1427,
                        "UnsubscribeFromNotificationsInput!"
                    ]
                }
            ],
            "updateBranchProtectionRule": [
                1433,
                {
                    "input": [
                        1432,
                        "UpdateBranchProtectionRuleInput!"
                    ]
                }
            ],
            "updateCheckRun": [
                1435,
                {
                    "input": [
                        1434,
                        "UpdateCheckRunInput!"
                    ]
                }
            ],
            "updateCheckSuitePreferences": [
                1437,
                {
                    "input": [
                        1436,
                        "UpdateCheckSuitePreferencesInput!"
                    ]
                }
            ],
            "updateDiscussion": [
                1441,
                {
                    "input": [
                        1440,
                        "UpdateDiscussionInput!"
                    ]
                }
            ],
            "updateDiscussionComment": [
                1439,
                {
                    "input": [
                        1438,
                        "UpdateDiscussionCommentInput!"
                    ]
                }
            ],
            "updateEnterpriseAdministratorRole": [
                1443,
                {
                    "input": [
                        1442,
                        "UpdateEnterpriseAdministratorRoleInput!"
                    ]
                }
            ],
            "updateEnterpriseAllowPrivateRepositoryForkingSetting": [
                1445,
                {
                    "input": [
                        1444,
                        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseDefaultRepositoryPermissionSetting": [
                1447,
                {
                    "input": [
                        1446,
                        "UpdateEnterpriseDefaultRepositoryPermissionSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanChangeRepositoryVisibilitySetting": [
                1449,
                {
                    "input": [
                        1448,
                        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanCreateRepositoriesSetting": [
                1451,
                {
                    "input": [
                        1450,
                        "UpdateEnterpriseMembersCanCreateRepositoriesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanDeleteIssuesSetting": [
                1453,
                {
                    "input": [
                        1452,
                        "UpdateEnterpriseMembersCanDeleteIssuesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanDeleteRepositoriesSetting": [
                1455,
                {
                    "input": [
                        1454,
                        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanInviteCollaboratorsSetting": [
                1457,
                {
                    "input": [
                        1456,
                        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanMakePurchasesSetting": [
                1459,
                {
                    "input": [
                        1458,
                        "UpdateEnterpriseMembersCanMakePurchasesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanUpdateProtectedBranchesSetting": [
                1461,
                {
                    "input": [
                        1460,
                        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanViewDependencyInsightsSetting": [
                1463,
                {
                    "input": [
                        1462,
                        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseOrganizationProjectsSetting": [
                1465,
                {
                    "input": [
                        1464,
                        "UpdateEnterpriseOrganizationProjectsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseOwnerOrganizationRole": [
                1467,
                {
                    "input": [
                        1466,
                        "UpdateEnterpriseOwnerOrganizationRoleInput!"
                    ]
                }
            ],
            "updateEnterpriseProfile": [
                1469,
                {
                    "input": [
                        1468,
                        "UpdateEnterpriseProfileInput!"
                    ]
                }
            ],
            "updateEnterpriseRepositoryProjectsSetting": [
                1471,
                {
                    "input": [
                        1470,
                        "UpdateEnterpriseRepositoryProjectsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseTeamDiscussionsSetting": [
                1473,
                {
                    "input": [
                        1472,
                        "UpdateEnterpriseTeamDiscussionsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseTwoFactorAuthenticationRequiredSetting": [
                1475,
                {
                    "input": [
                        1474,
                        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput!"
                    ]
                }
            ],
            "updateEnvironment": [
                1477,
                {
                    "input": [
                        1476,
                        "UpdateEnvironmentInput!"
                    ]
                }
            ],
            "updateIpAllowListEnabledSetting": [
                1479,
                {
                    "input": [
                        1478,
                        "UpdateIpAllowListEnabledSettingInput!"
                    ]
                }
            ],
            "updateIpAllowListEntry": [
                1481,
                {
                    "input": [
                        1480,
                        "UpdateIpAllowListEntryInput!"
                    ]
                }
            ],
            "updateIpAllowListForInstalledAppsEnabledSetting": [
                1483,
                {
                    "input": [
                        1482,
                        "UpdateIpAllowListForInstalledAppsEnabledSettingInput!"
                    ]
                }
            ],
            "updateIssue": [
                1487,
                {
                    "input": [
                        1486,
                        "UpdateIssueInput!"
                    ]
                }
            ],
            "updateIssueComment": [
                1485,
                {
                    "input": [
                        1484,
                        "UpdateIssueCommentInput!"
                    ]
                }
            ],
            "updateLabel": [
                1489,
                {
                    "input": [
                        1488,
                        "UpdateLabelInput!"
                    ]
                }
            ],
            "updateNotificationRestrictionSetting": [
                1491,
                {
                    "input": [
                        1490,
                        "UpdateNotificationRestrictionSettingInput!"
                    ]
                }
            ],
            "updateOrganizationAllowPrivateRepositoryForkingSetting": [
                1493,
                {
                    "input": [
                        1492,
                        "UpdateOrganizationAllowPrivateRepositoryForkingSettingInput!"
                    ]
                }
            ],
            "updateOrganizationWebCommitSignoffSetting": [
                1495,
                {
                    "input": [
                        1494,
                        "UpdateOrganizationWebCommitSignoffSettingInput!"
                    ]
                }
            ],
            "updatePatreonSponsorability": [
                1499,
                {
                    "input": [
                        1498,
                        "UpdatePatreonSponsorabilityInput!"
                    ]
                }
            ],
            "updateProject": [
                1505,
                {
                    "input": [
                        1504,
                        "UpdateProjectInput!"
                    ]
                }
            ],
            "updateProjectCard": [
                1501,
                {
                    "input": [
                        1500,
                        "UpdateProjectCardInput!"
                    ]
                }
            ],
            "updateProjectColumn": [
                1503,
                {
                    "input": [
                        1502,
                        "UpdateProjectColumnInput!"
                    ]
                }
            ],
            "updateProjectV2": [
                1515,
                {
                    "input": [
                        1510,
                        "UpdateProjectV2Input!"
                    ]
                }
            ],
            "updateProjectV2Collaborators": [
                1507,
                {
                    "input": [
                        1506,
                        "UpdateProjectV2CollaboratorsInput!"
                    ]
                }
            ],
            "updateProjectV2DraftIssue": [
                1509,
                {
                    "input": [
                        1508,
                        "UpdateProjectV2DraftIssueInput!"
                    ]
                }
            ],
            "updateProjectV2ItemFieldValue": [
                1512,
                {
                    "input": [
                        1511,
                        "UpdateProjectV2ItemFieldValueInput!"
                    ]
                }
            ],
            "updateProjectV2ItemPosition": [
                1514,
                {
                    "input": [
                        1513,
                        "UpdateProjectV2ItemPositionInput!"
                    ]
                }
            ],
            "updateProjectV2StatusUpdate": [
                1517,
                {
                    "input": [
                        1516,
                        "UpdateProjectV2StatusUpdateInput!"
                    ]
                }
            ],
            "updatePullRequest": [
                1521,
                {
                    "input": [
                        1520,
                        "UpdatePullRequestInput!"
                    ]
                }
            ],
            "updatePullRequestBranch": [
                1519,
                {
                    "input": [
                        1518,
                        "UpdatePullRequestBranchInput!"
                    ]
                }
            ],
            "updatePullRequestReview": [
                1525,
                {
                    "input": [
                        1524,
                        "UpdatePullRequestReviewInput!"
                    ]
                }
            ],
            "updatePullRequestReviewComment": [
                1523,
                {
                    "input": [
                        1522,
                        "UpdatePullRequestReviewCommentInput!"
                    ]
                }
            ],
            "updateRef": [
                1527,
                {
                    "input": [
                        1526,
                        "UpdateRefInput!"
                    ]
                }
            ],
            "updateRefs": [
                1529,
                {
                    "input": [
                        1528,
                        "UpdateRefsInput!"
                    ]
                }
            ],
            "updateRepository": [
                1531,
                {
                    "input": [
                        1530,
                        "UpdateRepositoryInput!"
                    ]
                }
            ],
            "updateRepositoryRuleset": [
                1533,
                {
                    "input": [
                        1532,
                        "UpdateRepositoryRulesetInput!"
                    ]
                }
            ],
            "updateRepositoryWebCommitSignoffSetting": [
                1535,
                {
                    "input": [
                        1534,
                        "UpdateRepositoryWebCommitSignoffSettingInput!"
                    ]
                }
            ],
            "updateSponsorshipPreferences": [
                1537,
                {
                    "input": [
                        1536,
                        "UpdateSponsorshipPreferencesInput!"
                    ]
                }
            ],
            "updateSubscription": [
                1539,
                {
                    "input": [
                        1538,
                        "UpdateSubscriptionInput!"
                    ]
                }
            ],
            "updateTeamDiscussion": [
                1543,
                {
                    "input": [
                        1542,
                        "UpdateTeamDiscussionInput!"
                    ]
                }
            ],
            "updateTeamDiscussionComment": [
                1541,
                {
                    "input": [
                        1540,
                        "UpdateTeamDiscussionCommentInput!"
                    ]
                }
            ],
            "updateTeamReviewAssignment": [
                1545,
                {
                    "input": [
                        1544,
                        "UpdateTeamReviewAssignmentInput!"
                    ]
                }
            ],
            "updateTeamsRepository": [
                1547,
                {
                    "input": [
                        1546,
                        "UpdateTeamsRepositoryInput!"
                    ]
                }
            ],
            "updateTopics": [
                1549,
                {
                    "input": [
                        1548,
                        "UpdateTopicsInput!"
                    ]
                }
            ],
            "updateUserList": [
                1551,
                {
                    "input": [
                        1550,
                        "UpdateUserListInput!"
                    ]
                }
            ],
            "updateUserListsForItem": [
                1553,
                {
                    "input": [
                        1552,
                        "UpdateUserListsForItemInput!"
                    ]
                }
            ],
            "verifyVerifiableDomain": [
                1582,
                {
                    "input": [
                        1581,
                        "VerifyVerifiableDomainInput!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "Node": {
            "id": [
                2
            ],
            "on_AddedToMergeQueueEvent": [
                55
            ],
            "on_AddedToProjectEvent": [
                56
            ],
            "on_App": [
                58
            ],
            "on_AssignedEvent": [
                68
            ],
            "on_AutoMergeDisabledEvent": [
                74
            ],
            "on_AutoMergeEnabledEvent": [
                75
            ],
            "on_AutoRebaseEnabledEvent": [
                77
            ],
            "on_AutoSquashEnabledEvent": [
                78
            ],
            "on_AutomaticBaseChangeFailedEvent": [
                79
            ],
            "on_AutomaticBaseChangeSucceededEvent": [
                80
            ],
            "on_BaseRefChangedEvent": [
                82
            ],
            "on_BaseRefDeletedEvent": [
                83
            ],
            "on_BaseRefForcePushedEvent": [
                84
            ],
            "on_Blob": [
                88
            ],
            "on_Bot": [
                89
            ],
            "on_BranchProtectionRule": [
                93
            ],
            "on_BypassForcePushAllowance": [
                101
            ],
            "on_BypassPullRequestAllowance": [
                104
            ],
            "on_CWE": [
                109
            ],
            "on_CheckRun": [
                129
            ],
            "on_CheckSuite": [
                143
            ],
            "on_ClosedEvent": [
                164
            ],
            "on_CodeOfConduct": [
                166
            ],
            "on_CommentDeletedEvent": [
                175
            ],
            "on_Commit": [
                176
            ],
            "on_CommitComment": [
                180
            ],
            "on_CommitCommentThread": [
                183
            ],
            "on_Comparison": [
                196
            ],
            "on_ConnectedEvent": [
                199
            ],
            "on_ConvertToDraftEvent": [
                215
            ],
            "on_ConvertedNoteToIssueEvent": [
                216
            ],
            "on_ConvertedToDiscussionEvent": [
                217
            ],
            "on_CrossReferencedEvent": [
                299
            ],
            "on_DemilestonedEvent": [
                360
            ],
            "on_DependencyGraphManifest": [
                367
            ],
            "on_DeployKey": [
                370
            ],
            "on_DeployedEvent": [
                373
            ],
            "on_Deployment": [
                374
            ],
            "on_DeploymentEnvironmentChangedEvent": [
                377
            ],
            "on_DeploymentReview": [
                387
            ],
            "on_DeploymentStatus": [
                395
            ],
            "on_DisconnectedEvent": [
                404
            ],
            "on_Discussion": [
                405
            ],
            "on_DiscussionCategory": [
                406
            ],
            "on_DiscussionComment": [
                410
            ],
            "on_DiscussionPoll": [
                417
            ],
            "on_DiscussionPollOption": [
                418
            ],
            "on_DraftIssue": [
                430
            ],
            "on_Enterprise": [
                437
            ],
            "on_EnterpriseAdministratorInvitation": [
                440
            ],
            "on_EnterpriseIdentityProvider": [
                456
            ],
            "on_EnterpriseMemberInvitation": [
                460
            ],
            "on_EnterpriseRepositoryInfo": [
                479
            ],
            "on_EnterpriseServerInstallation": [
                482
            ],
            "on_EnterpriseServerUserAccount": [
                489
            ],
            "on_EnterpriseServerUserAccountEmail": [
                492
            ],
            "on_EnterpriseServerUserAccountsUpload": [
                499
            ],
            "on_EnterpriseUserAccount": [
                505
            ],
            "on_Environment": [
                508
            ],
            "on_ExternalIdentity": [
                514
            ],
            "on_Gist": [
                537
            ],
            "on_GistComment": [
                538
            ],
            "on_HeadRefDeletedEvent": [
                564
            ],
            "on_HeadRefForcePushedEvent": [
                565
            ],
            "on_HeadRefRestoredEvent": [
                566
            ],
            "on_IpAllowListEntry": [
                577
            ],
            "on_Issue": [
                584
            ],
            "on_IssueComment": [
                586
            ],
            "on_Label": [
                609
            ],
            "on_LabeledEvent": [
                615
            ],
            "on_Language": [
                616
            ],
            "on_License": [
                621
            ],
            "on_LinkedBranch": [
                629
            ],
            "on_LockedEvent": [
                636
            ],
            "on_Mannequin": [
                637
            ],
            "on_MarkedAsDuplicateEvent": [
                652
            ],
            "on_MarketplaceCategory": [
                653
            ],
            "on_MarketplaceListing": [
                654
            ],
            "on_MemberFeatureRequestNotification": [
                661
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                663
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                664
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                665
            ],
            "on_MentionedEvent": [
                666
            ],
            "on_MergeQueue": [
                673
            ],
            "on_MergeQueueEntry": [
                675
            ],
            "on_MergedEvent": [
                682
            ],
            "on_MigrationSource": [
                684
            ],
            "on_Milestone": [
                687
            ],
            "on_MilestonedEvent": [
                694
            ],
            "on_MovedColumnsInProjectEvent": [
                702
            ],
            "on_OIDCProvider": [
                706
            ],
            "on_OauthApplicationCreateAuditEntry": [
                709
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                713
            ],
            "on_OrgAddMemberAuditEntry": [
                714
            ],
            "on_OrgBlockUserAuditEntry": [
                716
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                717
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                718
            ],
            "on_OrgCreateAuditEntry": [
                719
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                721
            ],
            "on_OrgDisableSamlAuditEntry": [
                722
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                723
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                724
            ],
            "on_OrgEnableSamlAuditEntry": [
                725
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                726
            ],
            "on_OrgInviteMemberAuditEntry": [
                729
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                730
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                731
            ],
            "on_OrgOauthAppAccessBlockedAuditEntry": [
                732
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                733
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                734
            ],
            "on_OrgOauthAppAccessUnblockedAuditEntry": [
                735
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                736
            ],
            "on_OrgRemoveMemberAuditEntry": [
                738
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                741
            ],
            "on_OrgRestoreMemberAuditEntry": [
                744
            ],
            "on_OrgUnblockUserAuditEntry": [
                749
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                750
            ],
            "on_OrgUpdateMemberAuditEntry": [
                752
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                754
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                756
            ],
            "on_Organization": [
                757
            ],
            "on_OrganizationIdentityProvider": [
                766
            ],
            "on_OrganizationInvitation": [
                767
            ],
            "on_OrganizationMigration": [
                777
            ],
            "on_Package": [
                784
            ],
            "on_PackageFile": [
                787
            ],
            "on_PackageTag": [
                796
            ],
            "on_PackageVersion": [
                798
            ],
            "on_PinnedDiscussion": [
                816
            ],
            "on_PinnedEnvironment": [
                821
            ],
            "on_PinnedEvent": [
                826
            ],
            "on_PinnedIssue": [
                827
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                831
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                832
            ],
            "on_Project": [
                835
            ],
            "on_ProjectCard": [
                836
            ],
            "on_ProjectColumn": [
                843
            ],
            "on_ProjectV2": [
                856
            ],
            "on_ProjectV2Field": [
                864
            ],
            "on_ProjectV2Item": [
                876
            ],
            "on_ProjectV2ItemFieldDateValue": [
                880
            ],
            "on_ProjectV2ItemFieldIterationValue": [
                881
            ],
            "on_ProjectV2ItemFieldNumberValue": [
                884
            ],
            "on_ProjectV2ItemFieldSingleSelectValue": [
                888
            ],
            "on_ProjectV2ItemFieldTextValue": [
                889
            ],
            "on_ProjectV2IterationField": [
                900
            ],
            "on_ProjectV2SingleSelectField": [
                909
            ],
            "on_ProjectV2StatusUpdate": [
                921
            ],
            "on_ProjectV2View": [
                926
            ],
            "on_ProjectV2Workflow": [
                932
            ],
            "on_PublicKey": [
                939
            ],
            "on_PullRequest": [
                944
            ],
            "on_PullRequestCommit": [
                949
            ],
            "on_PullRequestCommitCommentThread": [
                950
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewComment": [
                962
            ],
            "on_PullRequestReviewThread": [
                972
            ],
            "on_PullRequestThread": [
                979
            ],
            "on_Push": [
                988
            ],
            "on_PushAllowance": [
                989
            ],
            "on_Reaction": [
                998
            ],
            "on_ReadyForReviewEvent": [
                1008
            ],
            "on_Ref": [
                1009
            ],
            "on_ReferencedEvent": [
                1018
            ],
            "on_Release": [
                1026
            ],
            "on_ReleaseAsset": [
                1027
            ],
            "on_RemovedFromMergeQueueEvent": [
                1056
            ],
            "on_RemovedFromProjectEvent": [
                1057
            ],
            "on_RenamedTitleEvent": [
                1058
            ],
            "on_ReopenedEvent": [
                1066
            ],
            "on_RepoAccessAuditEntry": [
                1069
            ],
            "on_RepoAddMemberAuditEntry": [
                1071
            ],
            "on_RepoAddTopicAuditEntry": [
                1073
            ],
            "on_RepoArchivedAuditEntry": [
                1074
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                1076
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                1078
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                1079
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                1080
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                1081
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                1082
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                1083
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                1084
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                1085
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                1086
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                1087
            ],
            "on_RepoCreateAuditEntry": [
                1088
            ],
            "on_RepoDestroyAuditEntry": [
                1090
            ],
            "on_RepoRemoveMemberAuditEntry": [
                1092
            ],
            "on_RepoRemoveTopicAuditEntry": [
                1094
            ],
            "on_Repository": [
                1096
            ],
            "on_RepositoryInvitation": [
                1116
            ],
            "on_RepositoryMigration": [
                1122
            ],
            "on_RepositoryRule": [
                1139
            ],
            "on_RepositoryRuleset": [
                1148
            ],
            "on_RepositoryRulesetBypassActor": [
                1149
            ],
            "on_RepositoryTopic": [
                1157
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                1161
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                1162
            ],
            "on_RepositoryVulnerabilityAlert": [
                1163
            ],
            "on_ReviewDismissalAllowance": [
                1190
            ],
            "on_ReviewDismissedEvent": [
                1194
            ],
            "on_ReviewRequest": [
                1195
            ],
            "on_ReviewRequestRemovedEvent": [
                1198
            ],
            "on_ReviewRequestedEvent": [
                1199
            ],
            "on_SavedReply": [
                1212
            ],
            "on_SecurityAdvisory": [
                1221
            ],
            "on_SponsorsActivity": [
                1269
            ],
            "on_SponsorsListing": [
                1279
            ],
            "on_SponsorsListingFeaturedItem": [
                1281
            ],
            "on_SponsorsTier": [
                1283
            ],
            "on_Sponsorship": [
                1289
            ],
            "on_SponsorshipNewsletter": [
                1292
            ],
            "on_Status": [
                1315
            ],
            "on_StatusCheckRollup": [
                1318
            ],
            "on_StatusContext": [
                1322
            ],
            "on_SubscribedEvent": [
                1333
            ],
            "on_Tag": [
                1336
            ],
            "on_Team": [
                1339
            ],
            "on_TeamAddMemberAuditEntry": [
                1340
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1341
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1343
            ],
            "on_TeamDiscussion": [
                1345
            ],
            "on_TeamDiscussionComment": [
                1346
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1366
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1367
            ],
            "on_Topic": [
                1378
            ],
            "on_TransferredEvent": [
                1386
            ],
            "on_Tree": [
                1387
            ],
            "on_UnassignedEvent": [
                1394
            ],
            "on_UnlabeledEvent": [
                1401
            ],
            "on_UnlockedEvent": [
                1410
            ],
            "on_UnmarkedAsDuplicateEvent": [
                1419
            ],
            "on_UnpinnedEvent": [
                1424
            ],
            "on_UnsubscribedEvent": [
                1429
            ],
            "on_User": [
                1554
            ],
            "on_UserBlockedEvent": [
                1556
            ],
            "on_UserContentEdit": [
                1558
            ],
            "on_UserList": [
                1563
            ],
            "on_UserStatus": [
                1570
            ],
            "on_VerifiableDomain": [
                1575
            ],
            "on_Workflow": [
                1585
            ],
            "on_WorkflowRun": [
                1588
            ],
            "on_WorkflowRunFile": [
                1591
            ],
            "__typename": [
                1
            ]
        },
        "NotificationRestrictionSettingValue": {},
        "OIDCProvider": {
            "enterprise": [
                437
            ],
            "externalIdentities": [
                516,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "login": [
                        1
                    ],
                    "membersOnly": [
                        4
                    ],
                    "userName": [
                        1
                    ]
                }
            ],
            "id": [
                2
            ],
            "providerType": [
                707
            ],
            "tenantId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "OIDCProviderType": {},
        "OauthApplicationAuditEntryData": {
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                1389
            ],
            "oauthApplicationUrl": [
                1389
            ],
            "on_OauthApplicationCreateAuditEntry": [
                709
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                731
            ],
            "on_OrgOauthAppAccessBlockedAuditEntry": [
                732
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                733
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                734
            ],
            "on_OrgOauthAppAccessUnblockedAuditEntry": [
                735
            ],
            "__typename": [
                1
            ]
        },
        "OauthApplicationCreateAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "applicationUrl": [
                1389
            ],
            "callbackUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                1389
            ],
            "oauthApplicationUrl": [
                1389
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "rateLimit": [
                14
            ],
            "state": [
                710
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OauthApplicationCreateAuditEntryState": {},
        "OperationType": {},
        "OrderDirection": {},
        "OrgAddBillingManagerAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "invitationEmail": [
                1
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgAddMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "permission": [
                715
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgAddMemberAuditEntryPermission": {},
        "OrgBlockUserAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "blockedUser": [
                1554
            ],
            "blockedUserName": [
                1
            ],
            "blockedUserResourcePath": [
                1389
            ],
            "blockedUserUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgConfigDisableCollaboratorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgConfigEnableCollaboratorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgCreateAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "billingPlan": [
                720
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgCreateAuditEntryBillingPlan": {},
        "OrgDisableOauthAppRestrictionsAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgDisableSamlAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "digestMethodUrl": [
                1389
            ],
            "id": [
                2
            ],
            "issuerUrl": [
                1389
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "signatureMethodUrl": [
                1389
            ],
            "singleSignOnUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgDisableTwoFactorRequirementAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgEnableOauthAppRestrictionsAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgEnableSamlAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "digestMethodUrl": [
                1389
            ],
            "id": [
                2
            ],
            "issuerUrl": [
                1389
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "signatureMethodUrl": [
                1389
            ],
            "singleSignOnUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgEnableTwoFactorRequirementAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgEnterpriseOwnerOrder": {
            "direction": [
                712
            ],
            "field": [
                728
            ],
            "__typename": [
                1
            ]
        },
        "OrgEnterpriseOwnerOrderField": {},
        "OrgInviteMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationInvitation": [
                767
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgInviteToBusinessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "enterpriseResourcePath": [
                1389
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                1389
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgOauthAppAccessApprovedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                1389
            ],
            "oauthApplicationUrl": [
                1389
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgOauthAppAccessBlockedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                1389
            ],
            "oauthApplicationUrl": [
                1389
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgOauthAppAccessDeniedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                1389
            ],
            "oauthApplicationUrl": [
                1389
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgOauthAppAccessRequestedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                1389
            ],
            "oauthApplicationUrl": [
                1389
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgOauthAppAccessUnblockedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                1389
            ],
            "oauthApplicationUrl": [
                1389
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgRemoveBillingManagerAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "reason": [
                737
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgRemoveBillingManagerAuditEntryReason": {},
        "OrgRemoveMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "membershipTypes": [
                739
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "reason": [
                740
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgRemoveMemberAuditEntryMembershipType": {},
        "OrgRemoveMemberAuditEntryReason": {},
        "OrgRemoveOutsideCollaboratorAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "membershipTypes": [
                742
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "reason": [
                743
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgRemoveOutsideCollaboratorAuditEntryMembershipType": {},
        "OrgRemoveOutsideCollaboratorAuditEntryReason": {},
        "OrgRestoreMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "restoredCustomEmailRoutingsCount": [
                14
            ],
            "restoredIssueAssignmentsCount": [
                14
            ],
            "restoredMemberships": [
                745
            ],
            "restoredMembershipsCount": [
                14
            ],
            "restoredRepositoriesCount": [
                14
            ],
            "restoredRepositoryStarsCount": [
                14
            ],
            "restoredRepositoryWatchesCount": [
                14
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgRestoreMemberAuditEntryMembership": {
            "on_OrgRestoreMemberMembershipOrganizationAuditEntryData": [
                746
            ],
            "on_OrgRestoreMemberMembershipRepositoryAuditEntryData": [
                747
            ],
            "on_OrgRestoreMemberMembershipTeamAuditEntryData": [
                748
            ],
            "on_OrganizationAuditEntryData": [
                760
            ],
            "on_RepositoryAuditEntryData": [
                1098
            ],
            "on_TeamAuditEntryData": [
                1342
            ],
            "__typename": [
                1
            ]
        },
        "OrgRestoreMemberMembershipOrganizationAuditEntryData": {
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgRestoreMemberMembershipRepositoryAuditEntryData": {
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgRestoreMemberMembershipTeamAuditEntryData": {
            "team": [
                1339
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                1389
            ],
            "teamUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgUnblockUserAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "blockedUser": [
                1554
            ],
            "blockedUserName": [
                1
            ],
            "blockedUserResourcePath": [
                1389
            ],
            "blockedUserUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgUpdateDefaultRepositoryPermissionAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "permission": [
                751
            ],
            "permissionWas": [
                751
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgUpdateDefaultRepositoryPermissionAuditEntryPermission": {},
        "OrgUpdateMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "permission": [
                753
            ],
            "permissionWas": [
                753
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrgUpdateMemberAuditEntryPermission": {},
        "OrgUpdateMemberRepositoryCreationPermissionAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "canCreateRepositories": [
                4
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "visibility": [
                755
            ],
            "__typename": [
                1
            ]
        },
        "OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility": {},
        "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "canInviteOutsideCollaboratorsToRepositories": [
                4
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "Organization": {
            "announcement": [
                1
            ],
            "announcementCreatedAt": [
                301
            ],
            "announcementExpiresAt": [
                301
            ],
            "announcementUserDismissible": [
                4
            ],
            "anyPinnableItems": [
                4,
                {
                    "type": [
                        815
                    ]
                }
            ],
            "archivedAt": [
                301
            ],
            "auditLog": [
                759,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        72
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                1
            ],
            "domains": [
                1576,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "isApproved": [
                        4
                    ],
                    "isVerified": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1578
                    ]
                }
            ],
            "email": [
                1
            ],
            "enterpriseOwners": [
                764,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        727
                    ],
                    "organizationRole": [
                        1205
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "estimatedNextSponsorsPayoutInCents": [
                14
            ],
            "hasSponsorsListing": [
                4
            ],
            "id": [
                2
            ],
            "interactionAbility": [
                1112
            ],
            "ipAllowListEnabledSetting": [
                576
            ],
            "ipAllowListEntries": [
                578,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        580
                    ]
                }
            ],
            "ipAllowListForInstalledAppsEnabledSetting": [
                582
            ],
            "isSponsoredBy": [
                4,
                {
                    "accountLogin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "isSponsoringViewer": [
                4
            ],
            "isVerified": [
                4
            ],
            "itemShowcase": [
                833
            ],
            "lifetimeReceivedSponsorshipValues": [
                1255,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1257
                    ]
                }
            ],
            "location": [
                1
            ],
            "login": [
                1
            ],
            "mannequins": [
                638,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "login": [
                        1
                    ],
                    "orderBy": [
                        640
                    ]
                }
            ],
            "memberStatuses": [
                1571,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1573
                    ]
                }
            ],
            "membersCanForkPrivateRepositories": [
                4
            ],
            "membersWithRole": [
                773,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "monthlyEstimatedSponsorsIncomeInCents": [
                14
            ],
            "name": [
                1
            ],
            "newTeamResourcePath": [
                1389
            ],
            "newTeamUrl": [
                1389
            ],
            "notificationDeliveryRestrictionEnabledSetting": [
                705
            ],
            "organizationBillingEmail": [
                1
            ],
            "packages": [
                785,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "orderBy": [
                        792
                    ],
                    "packageType": [
                        797
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "pendingMembers": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "pinnableItems": [
                813,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "types": [
                        815,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItems": [
                813,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "types": [
                        815,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItemsRemaining": [
                14
            ],
            "project": [
                835,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projectV2": [
                856,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                848,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        850
                    ],
                    "search": [
                        1
                    ],
                    "states": [
                        854,
                        "[ProjectState!]"
                    ]
                }
            ],
            "projectsResourcePath": [
                1389
            ],
            "projectsUrl": [
                1389
            ],
            "projectsV2": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "minPermissionLevel": [
                        906
                    ],
                    "orderBy": [
                        903
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "recentProjects": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "repositories": [
                1103,
                {
                    "affiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "hasIssuesEnabled": [
                        4
                    ],
                    "isArchived": [
                        4
                    ],
                    "isFork": [
                        4
                    ],
                    "isLocked": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131
                    ],
                    "ownerAffiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        1136
                    ],
                    "visibility": [
                        1160
                    ]
                }
            ],
            "repository": [
                1096,
                {
                    "followRenames": [
                        4
                    ],
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "repositoryDiscussionComments": [
                411,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "onlyAnswers": [
                        4
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "repositoryDiscussions": [
                413,
                {
                    "after": [
                        1
                    ],
                    "answered": [
                        4
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        415
                    ],
                    "repositoryId": [
                        2
                    ],
                    "states": [
                        423,
                        "[DiscussionState!]"
                    ]
                }
            ],
            "repositoryMigrations": [
                1123,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1125
                    ],
                    "repositoryName": [
                        1
                    ],
                    "state": [
                        686
                    ]
                }
            ],
            "requiresTwoFactorAuthentication": [
                4
            ],
            "resourcePath": [
                1389
            ],
            "ruleset": [
                1148,
                {
                    "databaseId": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "rulesets": [
                1154,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includeParents": [
                        4
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "samlIdentityProvider": [
                766
            ],
            "sponsoring": [
                1259,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1261
                    ]
                }
            ],
            "sponsors": [
                1259,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1261
                    ],
                    "tierId": [
                        2
                    ]
                }
            ],
            "sponsorsActivities": [
                1271,
                {
                    "actions": [
                        1270,
                        "[SponsorsActivityAction!]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includeAsSponsor": [
                        4
                    ],
                    "includePrivate": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1273
                    ],
                    "period": [
                        1275
                    ],
                    "since": [
                        301
                    ],
                    "until": [
                        301
                    ]
                }
            ],
            "sponsorsListing": [
                1279
            ],
            "sponsorshipForViewerAsSponsor": [
                1289,
                {
                    "activeOnly": [
                        4
                    ]
                }
            ],
            "sponsorshipForViewerAsSponsorable": [
                1289,
                {
                    "activeOnly": [
                        4
                    ]
                }
            ],
            "sponsorshipNewsletters": [
                1293,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1295
                    ]
                }
            ],
            "sponsorshipsAsMaintainer": [
                1290,
                {
                    "activeOnly": [
                        4
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includePrivate": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1297
                    ]
                }
            ],
            "sponsorshipsAsSponsor": [
                1290,
                {
                    "activeOnly": [
                        4
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "maintainerLogins": [
                        1,
                        "[String!]"
                    ],
                    "orderBy": [
                        1297
                    ]
                }
            ],
            "team": [
                1339,
                {
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "teams": [
                1344,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "ldapMapped": [
                        4
                    ],
                    "notificationSetting": [
                        1362
                    ],
                    "orderBy": [
                        1363
                    ],
                    "privacy": [
                        1365
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        1373
                    ],
                    "rootTeamsOnly": [
                        4
                    ],
                    "userLogins": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "teamsResourcePath": [
                1389
            ],
            "teamsUrl": [
                1389
            ],
            "totalSponsorshipAmountAsSponsorInCents": [
                14,
                {
                    "since": [
                        301
                    ],
                    "sponsorableLogins": [
                        1,
                        "[String!]"
                    ],
                    "until": [
                        301
                    ]
                }
            ],
            "twitterUsername": [
                1
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "viewerCanAdminister": [
                4
            ],
            "viewerCanChangePinnedItems": [
                4
            ],
            "viewerCanCreateProjects": [
                4
            ],
            "viewerCanCreateRepositories": [
                4
            ],
            "viewerCanCreateTeams": [
                4
            ],
            "viewerCanSponsor": [
                4
            ],
            "viewerIsAMember": [
                4
            ],
            "viewerIsFollowing": [
                4
            ],
            "viewerIsSponsoring": [
                4
            ],
            "webCommitSignoffRequired": [
                4
            ],
            "websiteUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAuditEntry": {
            "on_MembersCanDeleteReposClearAuditEntry": [
                663
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                664
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                665
            ],
            "on_OauthApplicationCreateAuditEntry": [
                709
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                713
            ],
            "on_OrgAddMemberAuditEntry": [
                714
            ],
            "on_OrgBlockUserAuditEntry": [
                716
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                717
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                718
            ],
            "on_OrgCreateAuditEntry": [
                719
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                721
            ],
            "on_OrgDisableSamlAuditEntry": [
                722
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                723
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                724
            ],
            "on_OrgEnableSamlAuditEntry": [
                725
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                726
            ],
            "on_OrgInviteMemberAuditEntry": [
                729
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                730
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                731
            ],
            "on_OrgOauthAppAccessBlockedAuditEntry": [
                732
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                733
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                734
            ],
            "on_OrgOauthAppAccessUnblockedAuditEntry": [
                735
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                736
            ],
            "on_OrgRemoveMemberAuditEntry": [
                738
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                741
            ],
            "on_OrgRestoreMemberAuditEntry": [
                744
            ],
            "on_OrgUnblockUserAuditEntry": [
                749
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                750
            ],
            "on_OrgUpdateMemberAuditEntry": [
                752
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                754
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                756
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                831
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                832
            ],
            "on_RepoAccessAuditEntry": [
                1069
            ],
            "on_RepoAddMemberAuditEntry": [
                1071
            ],
            "on_RepoAddTopicAuditEntry": [
                1073
            ],
            "on_RepoArchivedAuditEntry": [
                1074
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                1076
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                1078
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                1079
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                1080
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                1081
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                1082
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                1083
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                1084
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                1085
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                1086
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                1087
            ],
            "on_RepoCreateAuditEntry": [
                1088
            ],
            "on_RepoDestroyAuditEntry": [
                1090
            ],
            "on_RepoRemoveMemberAuditEntry": [
                1092
            ],
            "on_RepoRemoveTopicAuditEntry": [
                1094
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                1161
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                1162
            ],
            "on_TeamAddMemberAuditEntry": [
                1340
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1341
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1343
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1366
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1367
            ],
            "on_AuditEntry": [
                70
            ],
            "on_EnterpriseAuditEntryData": [
                447
            ],
            "on_Node": [
                704
            ],
            "on_OrganizationAuditEntryData": [
                760
            ],
            "on_OauthApplicationAuditEntryData": [
                708
            ],
            "on_RepositoryAuditEntryData": [
                1098
            ],
            "on_TopicAuditEntryData": [
                1379
            ],
            "on_TeamAuditEntryData": [
                1342
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAuditEntryConnection": {
            "edges": [
                761
            ],
            "nodes": [
                758
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAuditEntryData": {
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                663
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                664
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                665
            ],
            "on_OauthApplicationCreateAuditEntry": [
                709
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                713
            ],
            "on_OrgAddMemberAuditEntry": [
                714
            ],
            "on_OrgBlockUserAuditEntry": [
                716
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                717
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                718
            ],
            "on_OrgCreateAuditEntry": [
                719
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                721
            ],
            "on_OrgDisableSamlAuditEntry": [
                722
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                723
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                724
            ],
            "on_OrgEnableSamlAuditEntry": [
                725
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                726
            ],
            "on_OrgInviteMemberAuditEntry": [
                729
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                730
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                731
            ],
            "on_OrgOauthAppAccessBlockedAuditEntry": [
                732
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                733
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                734
            ],
            "on_OrgOauthAppAccessUnblockedAuditEntry": [
                735
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                736
            ],
            "on_OrgRemoveMemberAuditEntry": [
                738
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                741
            ],
            "on_OrgRestoreMemberAuditEntry": [
                744
            ],
            "on_OrgRestoreMemberMembershipOrganizationAuditEntryData": [
                746
            ],
            "on_OrgUnblockUserAuditEntry": [
                749
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                750
            ],
            "on_OrgUpdateMemberAuditEntry": [
                752
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                754
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                756
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                831
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                832
            ],
            "on_RepoAccessAuditEntry": [
                1069
            ],
            "on_RepoAddMemberAuditEntry": [
                1071
            ],
            "on_RepoAddTopicAuditEntry": [
                1073
            ],
            "on_RepoArchivedAuditEntry": [
                1074
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                1076
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                1078
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                1079
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                1080
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                1081
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                1082
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                1083
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                1084
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                1085
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                1086
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                1087
            ],
            "on_RepoCreateAuditEntry": [
                1088
            ],
            "on_RepoDestroyAuditEntry": [
                1090
            ],
            "on_RepoRemoveMemberAuditEntry": [
                1092
            ],
            "on_RepoRemoveTopicAuditEntry": [
                1094
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                1161
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                1162
            ],
            "on_TeamAddMemberAuditEntry": [
                1340
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1341
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1343
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1366
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1367
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAuditEntryEdge": {
            "cursor": [
                1
            ],
            "node": [
                758
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConnection": {
            "edges": [
                763
            ],
            "nodes": [
                757
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationEdge": {
            "cursor": [
                1
            ],
            "node": [
                757
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationEnterpriseOwnerConnection": {
            "edges": [
                765
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationEnterpriseOwnerEdge": {
            "cursor": [
                1
            ],
            "node": [
                1554
            ],
            "organizationRole": [
                1205
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProvider": {
            "digestMethod": [
                1389
            ],
            "externalIdentities": [
                516,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "login": [
                        1
                    ],
                    "membersOnly": [
                        4
                    ],
                    "userName": [
                        1
                    ]
                }
            ],
            "id": [
                2
            ],
            "idpCertificate": [
                1597
            ],
            "issuer": [
                1
            ],
            "organization": [
                757
            ],
            "signatureMethod": [
                1389
            ],
            "ssoUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationInvitation": {
            "createdAt": [
                301
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "invitationSource": [
                771
            ],
            "invitationType": [
                772
            ],
            "invitee": [
                1554
            ],
            "inviter": [
                1554
            ],
            "inviterActor": [
                1554
            ],
            "organization": [
                757
            ],
            "role": [
                770
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationInvitationConnection": {
            "edges": [
                769
            ],
            "nodes": [
                767
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationInvitationEdge": {
            "cursor": [
                1
            ],
            "node": [
                767
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationInvitationRole": {},
        "OrganizationInvitationSource": {},
        "OrganizationInvitationType": {},
        "OrganizationMemberConnection": {
            "edges": [
                774
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationMemberEdge": {
            "cursor": [
                1
            ],
            "hasTwoFactorEnabled": [
                4
            ],
            "node": [
                1554
            ],
            "role": [
                775
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationMemberRole": {},
        "OrganizationMembersCanCreateRepositoriesSettingValue": {},
        "OrganizationMigration": {
            "createdAt": [
                301
            ],
            "databaseId": [
                1
            ],
            "failureReason": [
                1
            ],
            "id": [
                2
            ],
            "remainingRepositoriesCount": [
                14
            ],
            "sourceOrgName": [
                1
            ],
            "sourceOrgUrl": [
                1389
            ],
            "state": [
                778
            ],
            "targetOrgName": [
                1
            ],
            "totalRepositoriesCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationMigrationState": {},
        "OrganizationOrUser": {
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "on_Actor": [
                13
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Node": [
                704
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationOrder": {
            "direction": [
                712
            ],
            "field": [
                781
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationOrderField": {},
        "OrganizationTeamsHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "relevantTeams": [
                1344,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "teamsResourcePath": [
                1389
            ],
            "teamsUrl": [
                1389
            ],
            "totalTeamCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationsHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "relevantOrganizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ]
                }
            ],
            "totalOrganizationCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "Package": {
            "id": [
                2
            ],
            "latestVersion": [
                798
            ],
            "name": [
                1
            ],
            "packageType": [
                797
            ],
            "repository": [
                1096
            ],
            "statistics": [
                795
            ],
            "version": [
                798,
                {
                    "version": [
                        1,
                        "String!"
                    ]
                }
            ],
            "versions": [
                799,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        801
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "PackageConnection": {
            "edges": [
                786
            ],
            "nodes": [
                784
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PackageEdge": {
            "cursor": [
                1
            ],
            "node": [
                784
            ],
            "__typename": [
                1
            ]
        },
        "PackageFile": {
            "id": [
                2
            ],
            "md5": [
                1
            ],
            "name": [
                1
            ],
            "packageVersion": [
                798
            ],
            "sha1": [
                1
            ],
            "sha256": [
                1
            ],
            "size": [
                14
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "PackageFileConnection": {
            "edges": [
                789
            ],
            "nodes": [
                787
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PackageFileEdge": {
            "cursor": [
                1
            ],
            "node": [
                787
            ],
            "__typename": [
                1
            ]
        },
        "PackageFileOrder": {
            "direction": [
                712
            ],
            "field": [
                791
            ],
            "__typename": [
                1
            ]
        },
        "PackageFileOrderField": {},
        "PackageOrder": {
            "direction": [
                712
            ],
            "field": [
                793
            ],
            "__typename": [
                1
            ]
        },
        "PackageOrderField": {},
        "PackageOwner": {
            "id": [
                2
            ],
            "packages": [
                785,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "orderBy": [
                        792
                    ],
                    "packageType": [
                        797
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "on_Organization": [
                757
            ],
            "on_Repository": [
                1096
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "PackageStatistics": {
            "downloadsTotalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PackageTag": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "version": [
                798
            ],
            "__typename": [
                1
            ]
        },
        "PackageType": {},
        "PackageVersion": {
            "files": [
                788,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        790
                    ]
                }
            ],
            "id": [
                2
            ],
            "package": [
                784
            ],
            "platform": [
                1
            ],
            "preRelease": [
                4
            ],
            "readme": [
                1
            ],
            "release": [
                1026
            ],
            "statistics": [
                803
            ],
            "summary": [
                1
            ],
            "version": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PackageVersionConnection": {
            "edges": [
                800
            ],
            "nodes": [
                798
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PackageVersionEdge": {
            "cursor": [
                1
            ],
            "node": [
                798
            ],
            "__typename": [
                1
            ]
        },
        "PackageVersionOrder": {
            "direction": [
                712
            ],
            "field": [
                802
            ],
            "__typename": [
                1
            ]
        },
        "PackageVersionOrderField": {},
        "PackageVersionStatistics": {
            "downloadsTotalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PageInfo": {
            "endCursor": [
                1
            ],
            "hasNextPage": [
                4
            ],
            "hasPreviousPage": [
                4
            ],
            "startCursor": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PatchStatus": {},
        "PermissionGranter": {
            "on_Organization": [
                757
            ],
            "on_Repository": [
                1096
            ],
            "on_Team": [
                1339
            ],
            "on_Actor": [
                13
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Node": [
                704
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_RepositoryInfo": [
                1111
            ],
            "on_Starrable": [
                1308
            ],
            "on_Subscribable": [
                1331
            ],
            "__typename": [
                1
            ]
        },
        "PermissionSource": {
            "organization": [
                757
            ],
            "permission": [
                304
            ],
            "roleName": [
                1
            ],
            "source": [
                806
            ],
            "__typename": [
                1
            ]
        },
        "PinEnvironmentInput": {
            "clientMutationId": [
                1
            ],
            "environmentId": [
                2
            ],
            "pinned": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PinEnvironmentPayload": {
            "clientMutationId": [
                1
            ],
            "environment": [
                508
            ],
            "pinnedEnvironment": [
                821
            ],
            "__typename": [
                1
            ]
        },
        "PinIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "PinIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "PinnableItem": {
            "on_Gist": [
                537
            ],
            "on_Repository": [
                1096
            ],
            "on_Node": [
                704
            ],
            "on_Starrable": [
                1308
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryInfo": [
                1111
            ],
            "on_Subscribable": [
                1331
            ],
            "__typename": [
                1
            ]
        },
        "PinnableItemConnection": {
            "edges": [
                814
            ],
            "nodes": [
                812
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PinnableItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                812
            ],
            "__typename": [
                1
            ]
        },
        "PinnableItemType": {},
        "PinnedDiscussion": {
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "discussion": [
                405
            ],
            "gradientStopColors": [
                1
            ],
            "id": [
                2
            ],
            "pattern": [
                820
            ],
            "pinnedBy": [
                13
            ],
            "preconfiguredGradient": [
                819
            ],
            "repository": [
                1096
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "PinnedDiscussionConnection": {
            "edges": [
                818
            ],
            "nodes": [
                816
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PinnedDiscussionEdge": {
            "cursor": [
                1
            ],
            "node": [
                816
            ],
            "__typename": [
                1
            ]
        },
        "PinnedDiscussionGradient": {},
        "PinnedDiscussionPattern": {},
        "PinnedEnvironment": {
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "environment": [
                508
            ],
            "id": [
                2
            ],
            "position": [
                14
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "PinnedEnvironmentConnection": {
            "edges": [
                823
            ],
            "nodes": [
                821
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PinnedEnvironmentEdge": {
            "cursor": [
                1
            ],
            "node": [
                821
            ],
            "__typename": [
                1
            ]
        },
        "PinnedEnvironmentOrder": {
            "direction": [
                712
            ],
            "field": [
                825
            ],
            "__typename": [
                1
            ]
        },
        "PinnedEnvironmentOrderField": {},
        "PinnedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "PinnedIssue": {
            "databaseId": [
                14
            ],
            "fullDatabaseId": [
                85
            ],
            "id": [
                2
            ],
            "issue": [
                584
            ],
            "pinnedBy": [
                13
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "PinnedIssueConnection": {
            "edges": [
                829
            ],
            "nodes": [
                827
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PinnedIssueEdge": {
            "cursor": [
                1
            ],
            "node": [
                827
            ],
            "__typename": [
                1
            ]
        },
        "PreciseDateTime": {},
        "PrivateRepositoryForkingDisableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "enterpriseResourcePath": [
                1389
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                1389
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "PrivateRepositoryForkingEnableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "enterpriseResourcePath": [
                1389
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                1389
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "ProfileItemShowcase": {
            "hasPinnedItems": [
                4
            ],
            "items": [
                813,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "ProfileOwner": {
            "anyPinnableItems": [
                4,
                {
                    "type": [
                        815
                    ]
                }
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "itemShowcase": [
                833
            ],
            "location": [
                1
            ],
            "login": [
                1
            ],
            "name": [
                1
            ],
            "pinnableItems": [
                813,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "types": [
                        815,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItems": [
                813,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "types": [
                        815,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItemsRemaining": [
                14
            ],
            "viewerCanChangePinnedItems": [
                4
            ],
            "websiteUrl": [
                1389
            ],
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "Project": {
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "closed": [
                4
            ],
            "closedAt": [
                301
            ],
            "columns": [
                844,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "number": [
                14
            ],
            "owner": [
                852
            ],
            "pendingCards": [
                838,
                {
                    "after": [
                        1
                    ],
                    "archivedStates": [
                        837,
                        "[ProjectCardArchivedState]"
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "progress": [
                853
            ],
            "resourcePath": [
                1389
            ],
            "state": [
                854
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "viewerCanClose": [
                4
            ],
            "viewerCanReopen": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCard": {
            "column": [
                843
            ],
            "content": [
                841
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "isArchived": [
                4
            ],
            "note": [
                1
            ],
            "project": [
                835
            ],
            "resourcePath": [
                1389
            ],
            "state": [
                842
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardArchivedState": {},
        "ProjectCardConnection": {
            "edges": [
                839
            ],
            "nodes": [
                836
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardEdge": {
            "cursor": [
                1
            ],
            "node": [
                836
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardImport": {
            "number": [
                14
            ],
            "repository": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardItem": {
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "on_Assignable": [
                67
            ],
            "on_Closable": [
                157
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Labelable": [
                614
            ],
            "on_Lockable": [
                635
            ],
            "on_Node": [
                704
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Subscribable": [
                1331
            ],
            "on_SubscribableThread": [
                1332
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardState": {},
        "ProjectColumn": {
            "cards": [
                838,
                {
                    "after": [
                        1
                    ],
                    "archivedStates": [
                        837,
                        "[ProjectCardArchivedState]"
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "project": [
                835
            ],
            "purpose": [
                847
            ],
            "resourcePath": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "ProjectColumnConnection": {
            "edges": [
                845
            ],
            "nodes": [
                843
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectColumnEdge": {
            "cursor": [
                1
            ],
            "node": [
                843
            ],
            "__typename": [
                1
            ]
        },
        "ProjectColumnImport": {
            "columnName": [
                1
            ],
            "issues": [
                840
            ],
            "position": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectColumnPurpose": {},
        "ProjectConnection": {
            "edges": [
                849
            ],
            "nodes": [
                835
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectEdge": {
            "cursor": [
                1
            ],
            "node": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "ProjectOrder": {
            "direction": [
                712
            ],
            "field": [
                851
            ],
            "__typename": [
                1
            ]
        },
        "ProjectOrderField": {},
        "ProjectOwner": {
            "id": [
                2
            ],
            "project": [
                835,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                848,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        850
                    ],
                    "search": [
                        1
                    ],
                    "states": [
                        854,
                        "[ProjectState!]"
                    ]
                }
            ],
            "projectsResourcePath": [
                1389
            ],
            "projectsUrl": [
                1389
            ],
            "viewerCanCreateProjects": [
                4
            ],
            "on_Organization": [
                757
            ],
            "on_Repository": [
                1096
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "ProjectProgress": {
            "doneCount": [
                14
            ],
            "donePercentage": [
                108
            ],
            "enabled": [
                4
            ],
            "inProgressCount": [
                14
            ],
            "inProgressPercentage": [
                108
            ],
            "todoCount": [
                14
            ],
            "todoPercentage": [
                108
            ],
            "__typename": [
                1
            ]
        },
        "ProjectState": {},
        "ProjectTemplate": {},
        "ProjectV2": {
            "closed": [
                4
            ],
            "closedAt": [
                301
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "field": [
                866,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "fields": [
                867,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        871
                    ]
                }
            ],
            "id": [
                2
            ],
            "items": [
                877,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        897
                    ]
                }
            ],
            "number": [
                14
            ],
            "owner": [
                905
            ],
            "public": [
                4
            ],
            "readme": [
                1
            ],
            "repositories": [
                1103,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131
                    ]
                }
            ],
            "resourcePath": [
                1389
            ],
            "shortDescription": [
                1
            ],
            "statusUpdates": [
                922,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        920
                    ]
                }
            ],
            "teams": [
                1344,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1363
                    ]
                }
            ],
            "template": [
                4
            ],
            "title": [
                1
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "view": [
                926,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "viewerCanClose": [
                4
            ],
            "viewerCanReopen": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "views": [
                927,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        930
                    ]
                }
            ],
            "workflow": [
                932,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "workflows": [
                933,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        935
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2Actor": {
            "on_Team": [
                1339
            ],
            "on_User": [
                1554
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Node": [
                704
            ],
            "on_Subscribable": [
                1331
            ],
            "on_Actor": [
                13
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ActorConnection": {
            "edges": [
                859
            ],
            "nodes": [
                857
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ActorEdge": {
            "cursor": [
                1
            ],
            "node": [
                857
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2Collaborator": {
            "role": [
                908
            ],
            "teamId": [
                2
            ],
            "userId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2Connection": {
            "edges": [
                863
            ],
            "nodes": [
                856
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2CustomFieldType": {},
        "ProjectV2Edge": {
            "cursor": [
                1
            ],
            "node": [
                856
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2Field": {
            "createdAt": [
                301
            ],
            "dataType": [
                873
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "project": [
                856
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2FieldCommon": {
            "createdAt": [
                301
            ],
            "dataType": [
                873
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "project": [
                856
            ],
            "updatedAt": [
                301
            ],
            "on_ProjectV2Field": [
                864
            ],
            "on_ProjectV2IterationField": [
                900
            ],
            "on_ProjectV2SingleSelectField": [
                909
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2FieldConfiguration": {
            "on_ProjectV2Field": [
                864
            ],
            "on_ProjectV2IterationField": [
                900
            ],
            "on_ProjectV2SingleSelectField": [
                909
            ],
            "on_Node": [
                704
            ],
            "on_ProjectV2FieldCommon": [
                865
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2FieldConfigurationConnection": {
            "edges": [
                868
            ],
            "nodes": [
                866
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2FieldConfigurationEdge": {
            "cursor": [
                1
            ],
            "node": [
                866
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2FieldConnection": {
            "edges": [
                870
            ],
            "nodes": [
                864
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2FieldEdge": {
            "cursor": [
                1
            ],
            "node": [
                864
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2FieldOrder": {
            "direction": [
                712
            ],
            "field": [
                872
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2FieldOrderField": {},
        "ProjectV2FieldType": {},
        "ProjectV2FieldValue": {
            "date": [
                300
            ],
            "iterationId": [
                1
            ],
            "number": [
                108
            ],
            "singleSelectOptionId": [
                1
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2Filters": {
            "state": [
                919
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2Item": {
            "content": [
                878
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "fieldValueByName": [
                891,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "fieldValues": [
                893,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        895
                    ]
                }
            ],
            "fullDatabaseId": [
                85
            ],
            "id": [
                2
            ],
            "isArchived": [
                4
            ],
            "project": [
                856
            ],
            "type": [
                899
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemConnection": {
            "edges": [
                879
            ],
            "nodes": [
                876
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemContent": {
            "on_DraftIssue": [
                430
            ],
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "on_Node": [
                704
            ],
            "on_Assignable": [
                67
            ],
            "on_Closable": [
                157
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Labelable": [
                614
            ],
            "on_Lockable": [
                635
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Subscribable": [
                1331
            ],
            "on_SubscribableThread": [
                1332
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                876
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldDateValue": {
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "date": [
                300
            ],
            "field": [
                866
            ],
            "id": [
                2
            ],
            "item": [
                876
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldIterationValue": {
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "duration": [
                14
            ],
            "field": [
                866
            ],
            "id": [
                2
            ],
            "item": [
                876
            ],
            "iterationId": [
                1
            ],
            "startDate": [
                300
            ],
            "title": [
                1
            ],
            "titleHTML": [
                1
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldLabelValue": {
            "field": [
                866
            ],
            "labels": [
                610,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldMilestoneValue": {
            "field": [
                866
            ],
            "milestone": [
                687
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldNumberValue": {
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "field": [
                866
            ],
            "id": [
                2
            ],
            "item": [
                876
            ],
            "number": [
                108
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldPullRequestValue": {
            "field": [
                866
            ],
            "pullRequests": [
                953,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        957
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldRepositoryValue": {
            "field": [
                866
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldReviewerValue": {
            "field": [
                866
            ],
            "reviewers": [
                1172,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldSingleSelectValue": {
            "color": [
                911
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                1
            ],
            "field": [
                866
            ],
            "id": [
                2
            ],
            "item": [
                876
            ],
            "name": [
                1
            ],
            "nameHTML": [
                1
            ],
            "optionId": [
                1
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldTextValue": {
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "field": [
                866
            ],
            "id": [
                2
            ],
            "item": [
                876
            ],
            "text": [
                1
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldUserValue": {
            "field": [
                866
            ],
            "users": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldValue": {
            "on_ProjectV2ItemFieldDateValue": [
                880
            ],
            "on_ProjectV2ItemFieldIterationValue": [
                881
            ],
            "on_ProjectV2ItemFieldLabelValue": [
                882
            ],
            "on_ProjectV2ItemFieldMilestoneValue": [
                883
            ],
            "on_ProjectV2ItemFieldNumberValue": [
                884
            ],
            "on_ProjectV2ItemFieldPullRequestValue": [
                885
            ],
            "on_ProjectV2ItemFieldRepositoryValue": [
                886
            ],
            "on_ProjectV2ItemFieldReviewerValue": [
                887
            ],
            "on_ProjectV2ItemFieldSingleSelectValue": [
                888
            ],
            "on_ProjectV2ItemFieldTextValue": [
                889
            ],
            "on_ProjectV2ItemFieldUserValue": [
                890
            ],
            "on_Node": [
                704
            ],
            "on_ProjectV2ItemFieldValueCommon": [
                892
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldValueCommon": {
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "field": [
                866
            ],
            "id": [
                2
            ],
            "item": [
                876
            ],
            "updatedAt": [
                301
            ],
            "on_ProjectV2ItemFieldDateValue": [
                880
            ],
            "on_ProjectV2ItemFieldIterationValue": [
                881
            ],
            "on_ProjectV2ItemFieldNumberValue": [
                884
            ],
            "on_ProjectV2ItemFieldSingleSelectValue": [
                888
            ],
            "on_ProjectV2ItemFieldTextValue": [
                889
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldValueConnection": {
            "edges": [
                894
            ],
            "nodes": [
                891
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldValueEdge": {
            "cursor": [
                1
            ],
            "node": [
                891
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldValueOrder": {
            "direction": [
                712
            ],
            "field": [
                896
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemFieldValueOrderField": {},
        "ProjectV2ItemOrder": {
            "direction": [
                712
            ],
            "field": [
                898
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ItemOrderField": {},
        "ProjectV2ItemType": {},
        "ProjectV2IterationField": {
            "configuration": [
                901
            ],
            "createdAt": [
                301
            ],
            "dataType": [
                873
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "project": [
                856
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2IterationFieldConfiguration": {
            "completedIterations": [
                902
            ],
            "duration": [
                14
            ],
            "iterations": [
                902
            ],
            "startDay": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2IterationFieldIteration": {
            "duration": [
                14
            ],
            "id": [
                1
            ],
            "startDate": [
                300
            ],
            "title": [
                1
            ],
            "titleHTML": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2Order": {
            "direction": [
                712
            ],
            "field": [
                904
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2OrderField": {},
        "ProjectV2Owner": {
            "id": [
                2
            ],
            "projectV2": [
                856,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projectsV2": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "minPermissionLevel": [
                        906
                    ],
                    "orderBy": [
                        903
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "on_Issue": [
                584
            ],
            "on_Organization": [
                757
            ],
            "on_PullRequest": [
                944
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2PermissionLevel": {},
        "ProjectV2Recent": {
            "recentProjects": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "on_Organization": [
                757
            ],
            "on_Repository": [
                1096
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2Roles": {},
        "ProjectV2SingleSelectField": {
            "createdAt": [
                301
            ],
            "dataType": [
                873
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "options": [
                910,
                {
                    "names": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "project": [
                856
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2SingleSelectFieldOption": {
            "color": [
                911
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                1
            ],
            "id": [
                1
            ],
            "name": [
                1
            ],
            "nameHTML": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2SingleSelectFieldOptionColor": {},
        "ProjectV2SingleSelectFieldOptionInput": {
            "color": [
                911
            ],
            "description": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2SortBy": {
            "direction": [
                712
            ],
            "field": [
                864
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2SortByConnection": {
            "edges": [
                915
            ],
            "nodes": [
                913
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2SortByEdge": {
            "cursor": [
                1
            ],
            "node": [
                913
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2SortByField": {
            "direction": [
                712
            ],
            "field": [
                866
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2SortByFieldConnection": {
            "edges": [
                918
            ],
            "nodes": [
                916
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2SortByFieldEdge": {
            "cursor": [
                1
            ],
            "node": [
                916
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2State": {},
        "ProjectV2StatusOrder": {
            "direction": [
                712
            ],
            "field": [
                924
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2StatusUpdate": {
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "project": [
                856
            ],
            "startDate": [
                300
            ],
            "status": [
                925
            ],
            "targetDate": [
                300
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2StatusUpdateConnection": {
            "edges": [
                923
            ],
            "nodes": [
                921
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2StatusUpdateEdge": {
            "cursor": [
                1
            ],
            "node": [
                921
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2StatusUpdateOrderField": {},
        "ProjectV2StatusUpdateStatus": {},
        "ProjectV2View": {
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "fields": [
                867,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        871
                    ]
                }
            ],
            "filter": [
                1
            ],
            "groupBy": [
                869,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        871
                    ]
                }
            ],
            "groupByFields": [
                867,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        871
                    ]
                }
            ],
            "id": [
                2
            ],
            "layout": [
                929
            ],
            "name": [
                1
            ],
            "number": [
                14
            ],
            "project": [
                856
            ],
            "sortBy": [
                914,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "sortByFields": [
                917,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "updatedAt": [
                301
            ],
            "verticalGroupBy": [
                869,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        871
                    ]
                }
            ],
            "verticalGroupByFields": [
                867,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        871
                    ]
                }
            ],
            "visibleFields": [
                869,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        871
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ViewConnection": {
            "edges": [
                928
            ],
            "nodes": [
                926
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ViewEdge": {
            "cursor": [
                1
            ],
            "node": [
                926
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ViewLayout": {},
        "ProjectV2ViewOrder": {
            "direction": [
                712
            ],
            "field": [
                931
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2ViewOrderField": {},
        "ProjectV2Workflow": {
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "enabled": [
                4
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "number": [
                14
            ],
            "project": [
                856
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2WorkflowConnection": {
            "edges": [
                934
            ],
            "nodes": [
                932
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2WorkflowEdge": {
            "cursor": [
                1
            ],
            "node": [
                932
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2WorkflowOrder": {
            "direction": [
                712
            ],
            "field": [
                936
            ],
            "__typename": [
                1
            ]
        },
        "ProjectV2WorkflowsOrderField": {},
        "PropertyTargetDefinition": {
            "name": [
                1
            ],
            "propertyValues": [
                1
            ],
            "source": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PropertyTargetDefinitionInput": {
            "name": [
                1
            ],
            "propertyValues": [
                1
            ],
            "source": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicKey": {
            "accessedAt": [
                301
            ],
            "createdAt": [
                301
            ],
            "fingerprint": [
                1
            ],
            "id": [
                2
            ],
            "isReadOnly": [
                4
            ],
            "key": [
                1
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "PublicKeyConnection": {
            "edges": [
                941
            ],
            "nodes": [
                939
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PublicKeyEdge": {
            "cursor": [
                1
            ],
            "node": [
                939
            ],
            "__typename": [
                1
            ]
        },
        "PublishSponsorsTierInput": {
            "clientMutationId": [
                1
            ],
            "tierId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "PublishSponsorsTierPayload": {
            "clientMutationId": [
                1
            ],
            "sponsorsTier": [
                1283
            ],
            "__typename": [
                1
            ]
        },
        "PullRequest": {
            "activeLockReason": [
                634
            ],
            "additions": [
                14
            ],
            "assignees": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "autoMergeRequest": [
                76
            ],
            "baseRef": [
                1009
            ],
            "baseRefName": [
                1
            ],
            "baseRefOid": [
                552
            ],
            "baseRepository": [
                1096
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "canBeRebased": [
                4
            ],
            "changedFiles": [
                14
            ],
            "checksResourcePath": [
                1389
            ],
            "checksUrl": [
                1389
            ],
            "closed": [
                4
            ],
            "closedAt": [
                301
            ],
            "closingIssuesReferences": [
                591,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "userLinkedOnly": [
                        4
                    ]
                }
            ],
            "comments": [
                587,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        589
                    ]
                }
            ],
            "commits": [
                951,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "deletions": [
                14
            ],
            "editor": [
                13
            ],
            "files": [
                947,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "fullDatabaseId": [
                85
            ],
            "headRef": [
                1009
            ],
            "headRefName": [
                1
            ],
            "headRefOid": [
                552
            ],
            "headRepository": [
                1096
            ],
            "headRepositoryOwner": [
                1133
            ],
            "hovercard": [
                567,
                {
                    "includeNotificationContexts": [
                        4
                    ]
                }
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isCrossRepository": [
                4
            ],
            "isDraft": [
                4
            ],
            "isInMergeQueue": [
                4
            ],
            "isMergeQueueEnabled": [
                4
            ],
            "isReadByViewer": [
                4
            ],
            "labels": [
                610,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        612
                    ]
                }
            ],
            "lastEditedAt": [
                301
            ],
            "latestOpinionatedReviews": [
                966,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "writersOnly": [
                        4
                    ]
                }
            ],
            "latestReviews": [
                966,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "locked": [
                4
            ],
            "maintainerCanModify": [
                4
            ],
            "mergeCommit": [
                176
            ],
            "mergeQueue": [
                673
            ],
            "mergeQueueEntry": [
                675
            ],
            "mergeStateStatus": [
                680
            ],
            "mergeable": [
                681
            ],
            "merged": [
                4
            ],
            "mergedAt": [
                301
            ],
            "mergedBy": [
                13
            ],
            "milestone": [
                687
            ],
            "number": [
                14
            ],
            "participants": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "permalink": [
                1389
            ],
            "potentialMergeCommit": [
                176
            ],
            "projectCards": [
                838,
                {
                    "after": [
                        1
                    ],
                    "archivedStates": [
                        837,
                        "[ProjectCardArchivedState]"
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "projectItems": [
                877,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includeArchived": [
                        4
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "projectV2": [
                856,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projectsV2": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "minPermissionLevel": [
                        906
                    ],
                    "orderBy": [
                        903
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "publishedAt": [
                301
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "revertResourcePath": [
                1389
            ],
            "revertUrl": [
                1389
            ],
            "reviewDecision": [
                968
            ],
            "reviewRequests": [
                1196,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "reviewThreads": [
                973,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "reviews": [
                966,
                {
                    "after": [
                        1
                    ],
                    "author": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "states": [
                        971,
                        "[PullRequestReviewState!]"
                    ]
                }
            ],
            "state": [
                977
            ],
            "statusCheckRollup": [
                1318
            ],
            "suggestedReviewers": [
                1335
            ],
            "timeline": [
                980,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "since": [
                        301
                    ]
                }
            ],
            "timelineItems": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "itemTypes": [
                        986,
                        "[PullRequestTimelineItemsItemType!]"
                    ],
                    "last": [
                        14
                    ],
                    "since": [
                        301
                    ],
                    "skip": [
                        14
                    ]
                }
            ],
            "title": [
                1
            ],
            "titleHTML": [
                563
            ],
            "totalCommentsCount": [
                14
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanApplySuggestion": [
                4
            ],
            "viewerCanClose": [
                4
            ],
            "viewerCanDeleteHeadRef": [
                4
            ],
            "viewerCanDisableAutoMerge": [
                4
            ],
            "viewerCanEditFiles": [
                4
            ],
            "viewerCanEnableAutoMerge": [
                4
            ],
            "viewerCanMergeAsAdmin": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanReopen": [
                4
            ],
            "viewerCanSubscribe": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCanUpdateBranch": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "viewerLatestReview": [
                961
            ],
            "viewerLatestReviewRequest": [
                1195
            ],
            "viewerMergeBodyText": [
                1,
                {
                    "mergeType": [
                        956
                    ]
                }
            ],
            "viewerMergeHeadlineText": [
                1,
                {
                    "mergeType": [
                        956
                    ]
                }
            ],
            "viewerSubscription": [
                1334
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestBranchUpdateMethod": {},
        "PullRequestChangedFile": {
            "additions": [
                14
            ],
            "changeType": [
                805
            ],
            "deletions": [
                14
            ],
            "path": [
                1
            ],
            "viewerViewedState": [
                527
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestChangedFileConnection": {
            "edges": [
                948
            ],
            "nodes": [
                946
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestChangedFileEdge": {
            "cursor": [
                1
            ],
            "node": [
                946
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestCommit": {
            "commit": [
                176
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestCommitCommentThread": {
            "comments": [
                181,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "commit": [
                176
            ],
            "id": [
                2
            ],
            "path": [
                1
            ],
            "position": [
                14
            ],
            "pullRequest": [
                944
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestCommitConnection": {
            "edges": [
                952
            ],
            "nodes": [
                949
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestCommitEdge": {
            "cursor": [
                1
            ],
            "node": [
                949
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestConnection": {
            "edges": [
                955
            ],
            "nodes": [
                944
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestContributionsByRepository": {
            "contributions": [
                289,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        207
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestEdge": {
            "cursor": [
                1
            ],
            "node": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestMergeMethod": {},
        "PullRequestOrder": {
            "direction": [
                712
            ],
            "field": [
                958
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestOrderField": {},
        "PullRequestParameters": {
            "dismissStaleReviewsOnPush": [
                4
            ],
            "requireCodeOwnerReview": [
                4
            ],
            "requireLastPushApproval": [
                4
            ],
            "requiredApprovingReviewCount": [
                14
            ],
            "requiredReviewThreadResolution": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestParametersInput": {
            "dismissStaleReviewsOnPush": [
                4
            ],
            "requireCodeOwnerReview": [
                4
            ],
            "requireLastPushApproval": [
                4
            ],
            "requiredApprovingReviewCount": [
                14
            ],
            "requiredReviewThreadResolution": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReview": {
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "authorCanPushToRepository": [
                4
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "comments": [
                963,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "commit": [
                176
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "editor": [
                13
            ],
            "fullDatabaseId": [
                85
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isMinimized": [
                4
            ],
            "lastEditedAt": [
                301
            ],
            "minimizedReason": [
                1
            ],
            "onBehalfOf": [
                1344,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "publishedAt": [
                301
            ],
            "pullRequest": [
                944
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "state": [
                971
            ],
            "submittedAt": [
                301
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanMinimize": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewComment": {
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "commit": [
                176
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "diffHunk": [
                1
            ],
            "draftedAt": [
                301
            ],
            "editor": [
                13
            ],
            "fullDatabaseId": [
                85
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isMinimized": [
                4
            ],
            "lastEditedAt": [
                301
            ],
            "line": [
                14
            ],
            "minimizedReason": [
                1
            ],
            "originalCommit": [
                176
            ],
            "originalLine": [
                14
            ],
            "originalPosition": [
                14
            ],
            "originalStartLine": [
                14
            ],
            "outdated": [
                4
            ],
            "path": [
                1
            ],
            "position": [
                14
            ],
            "publishedAt": [
                301
            ],
            "pullRequest": [
                944
            ],
            "pullRequestReview": [
                961
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "replyTo": [
                962
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "startLine": [
                14
            ],
            "state": [
                965
            ],
            "subjectType": [
                975
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanMinimize": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewCommentConnection": {
            "edges": [
                964
            ],
            "nodes": [
                962
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                962
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewCommentState": {},
        "PullRequestReviewConnection": {
            "edges": [
                969
            ],
            "nodes": [
                961
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewContributionsByRepository": {
            "contributions": [
                293,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        207
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewDecision": {},
        "PullRequestReviewEdge": {
            "cursor": [
                1
            ],
            "node": [
                961
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewEvent": {},
        "PullRequestReviewState": {},
        "PullRequestReviewThread": {
            "comments": [
                963,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "skip": [
                        14
                    ]
                }
            ],
            "diffSide": [
                401
            ],
            "id": [
                2
            ],
            "isCollapsed": [
                4
            ],
            "isOutdated": [
                4
            ],
            "isResolved": [
                4
            ],
            "line": [
                14
            ],
            "originalLine": [
                14
            ],
            "originalStartLine": [
                14
            ],
            "path": [
                1
            ],
            "pullRequest": [
                944
            ],
            "repository": [
                1096
            ],
            "resolvedBy": [
                1554
            ],
            "startDiffSide": [
                401
            ],
            "startLine": [
                14
            ],
            "subjectType": [
                975
            ],
            "viewerCanReply": [
                4
            ],
            "viewerCanResolve": [
                4
            ],
            "viewerCanUnresolve": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewThreadConnection": {
            "edges": [
                974
            ],
            "nodes": [
                972
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewThreadEdge": {
            "cursor": [
                1
            ],
            "node": [
                972
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewThreadSubjectType": {},
        "PullRequestRevisionMarker": {
            "createdAt": [
                301
            ],
            "lastSeenCommit": [
                176
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestState": {},
        "PullRequestTemplate": {
            "body": [
                1
            ],
            "filename": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestThread": {
            "comments": [
                963,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "skip": [
                        14
                    ]
                }
            ],
            "diffSide": [
                401
            ],
            "id": [
                2
            ],
            "isCollapsed": [
                4
            ],
            "isOutdated": [
                4
            ],
            "isResolved": [
                4
            ],
            "line": [
                14
            ],
            "path": [
                1
            ],
            "pullRequest": [
                944
            ],
            "repository": [
                1096
            ],
            "resolvedBy": [
                1554
            ],
            "startDiffSide": [
                401
            ],
            "startLine": [
                14
            ],
            "subjectType": [
                975
            ],
            "viewerCanReply": [
                4
            ],
            "viewerCanResolve": [
                4
            ],
            "viewerCanUnresolve": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineConnection": {
            "edges": [
                982
            ],
            "nodes": [
                981
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItem": {
            "on_AssignedEvent": [
                68
            ],
            "on_BaseRefDeletedEvent": [
                83
            ],
            "on_BaseRefForcePushedEvent": [
                84
            ],
            "on_ClosedEvent": [
                164
            ],
            "on_Commit": [
                176
            ],
            "on_CommitCommentThread": [
                183
            ],
            "on_CrossReferencedEvent": [
                299
            ],
            "on_DemilestonedEvent": [
                360
            ],
            "on_DeployedEvent": [
                373
            ],
            "on_DeploymentEnvironmentChangedEvent": [
                377
            ],
            "on_HeadRefDeletedEvent": [
                564
            ],
            "on_HeadRefForcePushedEvent": [
                565
            ],
            "on_HeadRefRestoredEvent": [
                566
            ],
            "on_IssueComment": [
                586
            ],
            "on_LabeledEvent": [
                615
            ],
            "on_LockedEvent": [
                636
            ],
            "on_MergedEvent": [
                682
            ],
            "on_MilestonedEvent": [
                694
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewComment": [
                962
            ],
            "on_PullRequestReviewThread": [
                972
            ],
            "on_ReferencedEvent": [
                1018
            ],
            "on_RenamedTitleEvent": [
                1058
            ],
            "on_ReopenedEvent": [
                1066
            ],
            "on_ReviewDismissedEvent": [
                1194
            ],
            "on_ReviewRequestRemovedEvent": [
                1198
            ],
            "on_ReviewRequestedEvent": [
                1199
            ],
            "on_SubscribedEvent": [
                1333
            ],
            "on_UnassignedEvent": [
                1394
            ],
            "on_UnlabeledEvent": [
                1401
            ],
            "on_UnlockedEvent": [
                1410
            ],
            "on_UnsubscribedEvent": [
                1429
            ],
            "on_UserBlockedEvent": [
                1556
            ],
            "on_Node": [
                704
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_GitObject": [
                551
            ],
            "on_Subscribable": [
                1331
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Minimizable": [
                695
            ],
            "on_Reactable": [
                995
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                981
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItems": {
            "on_AddedToMergeQueueEvent": [
                55
            ],
            "on_AddedToProjectEvent": [
                56
            ],
            "on_AssignedEvent": [
                68
            ],
            "on_AutoMergeDisabledEvent": [
                74
            ],
            "on_AutoMergeEnabledEvent": [
                75
            ],
            "on_AutoRebaseEnabledEvent": [
                77
            ],
            "on_AutoSquashEnabledEvent": [
                78
            ],
            "on_AutomaticBaseChangeFailedEvent": [
                79
            ],
            "on_AutomaticBaseChangeSucceededEvent": [
                80
            ],
            "on_BaseRefChangedEvent": [
                82
            ],
            "on_BaseRefDeletedEvent": [
                83
            ],
            "on_BaseRefForcePushedEvent": [
                84
            ],
            "on_ClosedEvent": [
                164
            ],
            "on_CommentDeletedEvent": [
                175
            ],
            "on_ConnectedEvent": [
                199
            ],
            "on_ConvertToDraftEvent": [
                215
            ],
            "on_ConvertedNoteToIssueEvent": [
                216
            ],
            "on_ConvertedToDiscussionEvent": [
                217
            ],
            "on_CrossReferencedEvent": [
                299
            ],
            "on_DemilestonedEvent": [
                360
            ],
            "on_DeployedEvent": [
                373
            ],
            "on_DeploymentEnvironmentChangedEvent": [
                377
            ],
            "on_DisconnectedEvent": [
                404
            ],
            "on_HeadRefDeletedEvent": [
                564
            ],
            "on_HeadRefForcePushedEvent": [
                565
            ],
            "on_HeadRefRestoredEvent": [
                566
            ],
            "on_IssueComment": [
                586
            ],
            "on_LabeledEvent": [
                615
            ],
            "on_LockedEvent": [
                636
            ],
            "on_MarkedAsDuplicateEvent": [
                652
            ],
            "on_MentionedEvent": [
                666
            ],
            "on_MergedEvent": [
                682
            ],
            "on_MilestonedEvent": [
                694
            ],
            "on_MovedColumnsInProjectEvent": [
                702
            ],
            "on_PinnedEvent": [
                826
            ],
            "on_PullRequestCommit": [
                949
            ],
            "on_PullRequestCommitCommentThread": [
                950
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewThread": [
                972
            ],
            "on_PullRequestRevisionMarker": [
                976
            ],
            "on_ReadyForReviewEvent": [
                1008
            ],
            "on_ReferencedEvent": [
                1018
            ],
            "on_RemovedFromMergeQueueEvent": [
                1056
            ],
            "on_RemovedFromProjectEvent": [
                1057
            ],
            "on_RenamedTitleEvent": [
                1058
            ],
            "on_ReopenedEvent": [
                1066
            ],
            "on_ReviewDismissedEvent": [
                1194
            ],
            "on_ReviewRequestRemovedEvent": [
                1198
            ],
            "on_ReviewRequestedEvent": [
                1199
            ],
            "on_SubscribedEvent": [
                1333
            ],
            "on_TransferredEvent": [
                1386
            ],
            "on_UnassignedEvent": [
                1394
            ],
            "on_UnlabeledEvent": [
                1401
            ],
            "on_UnlockedEvent": [
                1410
            ],
            "on_UnmarkedAsDuplicateEvent": [
                1419
            ],
            "on_UnpinnedEvent": [
                1424
            ],
            "on_UnsubscribedEvent": [
                1429
            ],
            "on_UserBlockedEvent": [
                1556
            ],
            "on_Node": [
                704
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Minimizable": [
                695
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItemsConnection": {
            "edges": [
                985
            ],
            "filteredCount": [
                14
            ],
            "nodes": [
                983
            ],
            "pageCount": [
                14
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItemsEdge": {
            "cursor": [
                1
            ],
            "node": [
                983
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItemsItemType": {},
        "PullRequestUpdateState": {},
        "Push": {
            "id": [
                2
            ],
            "nextSha": [
                552
            ],
            "permalink": [
                1389
            ],
            "previousSha": [
                552
            ],
            "pusher": [
                13
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "PushAllowance": {
            "actor": [
                990
            ],
            "branchProtectionRule": [
                93
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "PushAllowanceActor": {
            "on_App": [
                58
            ],
            "on_Team": [
                1339
            ],
            "on_User": [
                1554
            ],
            "on_Node": [
                704
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Subscribable": [
                1331
            ],
            "on_Actor": [
                13
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "PushAllowanceConnection": {
            "edges": [
                992
            ],
            "nodes": [
                989
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PushAllowanceEdge": {
            "cursor": [
                1
            ],
            "node": [
                989
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "codeOfConduct": [
                166,
                {
                    "key": [
                        1,
                        "String!"
                    ]
                }
            ],
            "codesOfConduct": [
                166
            ],
            "enterprise": [
                437,
                {
                    "invitationToken": [
                        1
                    ],
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "enterpriseAdministratorInvitation": [
                440,
                {
                    "enterpriseSlug": [
                        1,
                        "String!"
                    ],
                    "role": [
                        445,
                        "EnterpriseAdministratorRole!"
                    ],
                    "userLogin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "enterpriseAdministratorInvitationByToken": [
                440,
                {
                    "invitationToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "enterpriseMemberInvitation": [
                460,
                {
                    "enterpriseSlug": [
                        1,
                        "String!"
                    ],
                    "userLogin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "enterpriseMemberInvitationByToken": [
                460,
                {
                    "invitationToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "license": [
                621,
                {
                    "key": [
                        1,
                        "String!"
                    ]
                }
            ],
            "licenses": [
                621
            ],
            "marketplaceCategories": [
                653,
                {
                    "excludeEmpty": [
                        4
                    ],
                    "excludeSubcategories": [
                        4
                    ],
                    "includeCategories": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "marketplaceCategory": [
                653,
                {
                    "slug": [
                        1,
                        "String!"
                    ],
                    "useTopicAliases": [
                        4
                    ]
                }
            ],
            "marketplaceListing": [
                654,
                {
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "marketplaceListings": [
                655,
                {
                    "adminId": [
                        2
                    ],
                    "after": [
                        1
                    ],
                    "allStates": [
                        4
                    ],
                    "before": [
                        1
                    ],
                    "categorySlug": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "organizationId": [
                        2
                    ],
                    "primaryCategoryOnly": [
                        4
                    ],
                    "slugs": [
                        1,
                        "[String]"
                    ],
                    "useTopicAliases": [
                        4
                    ],
                    "viewerCanAdmin": [
                        4
                    ],
                    "withFreeTrialsOnly": [
                        4
                    ]
                }
            ],
            "meta": [
                550
            ],
            "node": [
                704,
                {
                    "id": [
                        2,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                704,
                {
                    "ids": [
                        2,
                        "[ID!]!"
                    ]
                }
            ],
            "organization": [
                757,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "rateLimit": [
                994,
                {
                    "dryRun": [
                        4
                    ]
                }
            ],
            "relay": [
                993
            ],
            "repository": [
                1096,
                {
                    "followRenames": [
                        4
                    ],
                    "name": [
                        1,
                        "String!"
                    ],
                    "owner": [
                        1,
                        "String!"
                    ]
                }
            ],
            "repositoryOwner": [
                1133,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resource": [
                1399,
                {
                    "url": [
                        1389,
                        "URI!"
                    ]
                }
            ],
            "search": [
                1218,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "query": [
                        1,
                        "String!"
                    ],
                    "type": [
                        1220,
                        "SearchType!"
                    ]
                }
            ],
            "securityAdvisories": [
                1223,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "classifications": [
                        1222,
                        "[SecurityAdvisoryClassification!]"
                    ],
                    "first": [
                        14
                    ],
                    "identifier": [
                        1227
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1229
                    ],
                    "publishedSince": [
                        301
                    ],
                    "updatedSince": [
                        301
                    ]
                }
            ],
            "securityAdvisory": [
                1221,
                {
                    "ghsaId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "securityVulnerabilities": [
                1236,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "classifications": [
                        1222,
                        "[SecurityAdvisoryClassification!]"
                    ],
                    "ecosystem": [
                        1224
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1238
                    ],
                    "package": [
                        1
                    ],
                    "severities": [
                        1234,
                        "[SecurityAdvisorySeverity!]"
                    ]
                }
            ],
            "sponsorables": [
                1265,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "dependencyEcosystem": [
                        1224
                    ],
                    "ecosystem": [
                        366
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "onlyDependencies": [
                        4
                    ],
                    "orderBy": [
                        1267
                    ],
                    "orgLoginForDependencies": [
                        1
                    ]
                }
            ],
            "topic": [
                1378,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "user": [
                1554,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "viewer": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "RateLimit": {
            "cost": [
                14
            ],
            "limit": [
                14
            ],
            "nodeCount": [
                14
            ],
            "remaining": [
                14
            ],
            "resetAt": [
                301
            ],
            "used": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "Reactable": {
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "viewerCanReact": [
                4
            ],
            "on_CommitComment": [
                180
            ],
            "on_Discussion": [
                405
            ],
            "on_DiscussionComment": [
                410
            ],
            "on_Issue": [
                584
            ],
            "on_IssueComment": [
                586
            ],
            "on_PullRequest": [
                944
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewComment": [
                962
            ],
            "on_Release": [
                1026
            ],
            "on_TeamDiscussion": [
                1345
            ],
            "on_TeamDiscussionComment": [
                1346
            ],
            "__typename": [
                1
            ]
        },
        "ReactingUserConnection": {
            "edges": [
                997
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ReactingUserEdge": {
            "cursor": [
                1
            ],
            "node": [
                1554
            ],
            "reactedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "Reaction": {
            "content": [
                1000
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "reactable": [
                995
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "ReactionConnection": {
            "edges": [
                1001
            ],
            "nodes": [
                998
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "viewerHasReacted": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ReactionContent": {},
        "ReactionEdge": {
            "cursor": [
                1
            ],
            "node": [
                998
            ],
            "__typename": [
                1
            ]
        },
        "ReactionGroup": {
            "content": [
                1000
            ],
            "createdAt": [
                301
            ],
            "reactors": [
                1006,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "subject": [
                995
            ],
            "users": [
                996,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerHasReacted": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ReactionOrder": {
            "direction": [
                712
            ],
            "field": [
                1004
            ],
            "__typename": [
                1
            ]
        },
        "ReactionOrderField": {},
        "Reactor": {
            "on_Bot": [
                89
            ],
            "on_Mannequin": [
                637
            ],
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "on_Actor": [
                13
            ],
            "on_Node": [
                704
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "__typename": [
                1
            ]
        },
        "ReactorConnection": {
            "edges": [
                1007
            ],
            "nodes": [
                1005
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ReactorEdge": {
            "cursor": [
                1
            ],
            "node": [
                1005
            ],
            "reactedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ReadyForReviewEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "Ref": {
            "associatedPullRequests": [
                953,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        977,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "branchProtectionRule": [
                93
            ],
            "compare": [
                196,
                {
                    "headRef": [
                        1,
                        "String!"
                    ]
                }
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "prefix": [
                1
            ],
            "refUpdateRule": [
                1017
            ],
            "repository": [
                1096
            ],
            "rules": [
                1142,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1145
                    ]
                }
            ],
            "target": [
                551
            ],
            "__typename": [
                1
            ]
        },
        "RefConnection": {
            "edges": [
                1011
            ],
            "nodes": [
                1009
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RefEdge": {
            "cursor": [
                1
            ],
            "node": [
                1009
            ],
            "__typename": [
                1
            ]
        },
        "RefNameConditionTarget": {
            "exclude": [
                1
            ],
            "include": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RefNameConditionTargetInput": {
            "exclude": [
                1
            ],
            "include": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RefOrder": {
            "direction": [
                712
            ],
            "field": [
                1015
            ],
            "__typename": [
                1
            ]
        },
        "RefOrderField": {},
        "RefUpdate": {
            "afterOid": [
                552
            ],
            "beforeOid": [
                552
            ],
            "force": [
                4
            ],
            "name": [
                553
            ],
            "__typename": [
                1
            ]
        },
        "RefUpdateRule": {
            "allowsDeletions": [
                4
            ],
            "allowsForcePushes": [
                4
            ],
            "blocksCreations": [
                4
            ],
            "pattern": [
                1
            ],
            "requiredApprovingReviewCount": [
                14
            ],
            "requiredStatusCheckContexts": [
                1
            ],
            "requiresCodeOwnerReviews": [
                4
            ],
            "requiresConversationResolution": [
                4
            ],
            "requiresLinearHistory": [
                4
            ],
            "requiresSignatures": [
                4
            ],
            "viewerAllowedToDismissReviews": [
                4
            ],
            "viewerCanPush": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ReferencedEvent": {
            "actor": [
                13
            ],
            "commit": [
                176
            ],
            "commitRepository": [
                1096
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                4
            ],
            "isDirectReference": [
                4
            ],
            "subject": [
                1019
            ],
            "__typename": [
                1
            ]
        },
        "ReferencedSubject": {
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "on_Assignable": [
                67
            ],
            "on_Closable": [
                157
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Labelable": [
                614
            ],
            "on_Lockable": [
                635
            ],
            "on_Node": [
                704
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Subscribable": [
                1331
            ],
            "on_SubscribableThread": [
                1332
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "RegenerateEnterpriseIdentityProviderRecoveryCodesInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RegenerateEnterpriseIdentityProviderRecoveryCodesPayload": {
            "clientMutationId": [
                1
            ],
            "identityProvider": [
                456
            ],
            "__typename": [
                1
            ]
        },
        "RegenerateVerifiableDomainTokenInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RegenerateVerifiableDomainTokenPayload": {
            "clientMutationId": [
                1
            ],
            "verificationToken": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RejectDeploymentsInput": {
            "clientMutationId": [
                1
            ],
            "comment": [
                1
            ],
            "environmentIds": [
                2
            ],
            "workflowRunId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RejectDeploymentsPayload": {
            "clientMutationId": [
                1
            ],
            "deployments": [
                374
            ],
            "__typename": [
                1
            ]
        },
        "Release": {
            "author": [
                1554
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                563
            ],
            "id": [
                2
            ],
            "isDraft": [
                4
            ],
            "isLatest": [
                4
            ],
            "isPrerelease": [
                4
            ],
            "mentions": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "name": [
                1
            ],
            "publishedAt": [
                301
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "releaseAssets": [
                1028,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "name": [
                        1
                    ]
                }
            ],
            "repository": [
                1096
            ],
            "resourcePath": [
                1389
            ],
            "shortDescriptionHTML": [
                563,
                {
                    "limit": [
                        14
                    ]
                }
            ],
            "tag": [
                1009
            ],
            "tagCommit": [
                176
            ],
            "tagName": [
                1
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "viewerCanReact": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseAsset": {
            "contentType": [
                1
            ],
            "createdAt": [
                301
            ],
            "downloadCount": [
                14
            ],
            "downloadUrl": [
                1389
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "release": [
                1026
            ],
            "size": [
                14
            ],
            "updatedAt": [
                301
            ],
            "uploadedBy": [
                1554
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseAssetConnection": {
            "edges": [
                1029
            ],
            "nodes": [
                1027
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseAssetEdge": {
            "cursor": [
                1
            ],
            "node": [
                1027
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseConnection": {
            "edges": [
                1031
            ],
            "nodes": [
                1026
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseEdge": {
            "cursor": [
                1
            ],
            "node": [
                1026
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseOrder": {
            "direction": [
                712
            ],
            "field": [
                1033
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseOrderField": {},
        "RemoveAssigneesFromAssignableInput": {
            "assignableId": [
                2
            ],
            "assigneeIds": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RemoveAssigneesFromAssignablePayload": {
            "assignable": [
                67
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseAdminInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseAdminPayload": {
            "admin": [
                1554
            ],
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "viewer": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseIdentityProviderInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseIdentityProviderPayload": {
            "clientMutationId": [
                1
            ],
            "identityProvider": [
                456
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseMemberInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "userId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseMemberPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "user": [
                1554
            ],
            "viewer": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseOrganizationInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseOrganizationPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "organization": [
                757
            ],
            "viewer": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseSupportEntitlementInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseSupportEntitlementPayload": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RemoveLabelsFromLabelableInput": {
            "clientMutationId": [
                1
            ],
            "labelIds": [
                2
            ],
            "labelableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveLabelsFromLabelablePayload": {
            "clientMutationId": [
                1
            ],
            "labelable": [
                614
            ],
            "__typename": [
                1
            ]
        },
        "RemoveOutsideCollaboratorInput": {
            "clientMutationId": [
                1
            ],
            "organizationId": [
                2
            ],
            "userId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveOutsideCollaboratorPayload": {
            "clientMutationId": [
                1
            ],
            "removedUser": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "RemoveReactionInput": {
            "clientMutationId": [
                1
            ],
            "content": [
                1000
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveReactionPayload": {
            "clientMutationId": [
                1
            ],
            "reaction": [
                998
            ],
            "reactionGroups": [
                1002
            ],
            "subject": [
                995
            ],
            "__typename": [
                1
            ]
        },
        "RemoveStarInput": {
            "clientMutationId": [
                1
            ],
            "starrableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveStarPayload": {
            "clientMutationId": [
                1
            ],
            "starrable": [
                1308
            ],
            "__typename": [
                1
            ]
        },
        "RemoveUpvoteInput": {
            "clientMutationId": [
                1
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveUpvotePayload": {
            "clientMutationId": [
                1
            ],
            "subject": [
                1584
            ],
            "__typename": [
                1
            ]
        },
        "RemovedFromMergeQueueEvent": {
            "actor": [
                13
            ],
            "beforeCommit": [
                176
            ],
            "createdAt": [
                301
            ],
            "enqueuer": [
                1554
            ],
            "id": [
                2
            ],
            "mergeQueue": [
                673
            ],
            "pullRequest": [
                944
            ],
            "reason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RemovedFromProjectEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "project": [
                835
            ],
            "projectColumnName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RenamedTitleEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "currentTitle": [
                1
            ],
            "id": [
                2
            ],
            "previousTitle": [
                1
            ],
            "subject": [
                1059
            ],
            "__typename": [
                1
            ]
        },
        "RenamedTitleSubject": {
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "on_Assignable": [
                67
            ],
            "on_Closable": [
                157
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Labelable": [
                614
            ],
            "on_Lockable": [
                635
            ],
            "on_Node": [
                704
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Subscribable": [
                1331
            ],
            "on_SubscribableThread": [
                1332
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Updatable": [
                1430
            ],
            "on_UpdatableComment": [
                1431
            ],
            "__typename": [
                1
            ]
        },
        "ReopenDiscussionInput": {
            "clientMutationId": [
                1
            ],
            "discussionId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ReopenDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "discussion": [
                405
            ],
            "__typename": [
                1
            ]
        },
        "ReopenIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ReopenIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "ReopenPullRequestInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ReopenPullRequestPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "ReopenedEvent": {
            "actor": [
                13
            ],
            "closable": [
                157
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "stateReason": [
                599
            ],
            "__typename": [
                1
            ]
        },
        "ReorderEnvironmentInput": {
            "clientMutationId": [
                1
            ],
            "environmentId": [
                2
            ],
            "position": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ReorderEnvironmentPayload": {
            "clientMutationId": [
                1
            ],
            "environment": [
                508
            ],
            "__typename": [
                1
            ]
        },
        "RepoAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "visibility": [
                1070
            ],
            "__typename": [
                1
            ]
        },
        "RepoAccessAuditEntryVisibility": {},
        "RepoAddMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "visibility": [
                1072
            ],
            "__typename": [
                1
            ]
        },
        "RepoAddMemberAuditEntryVisibility": {},
        "RepoAddTopicAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "topic": [
                1378
            ],
            "topicName": [
                1
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoArchivedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "visibility": [
                1075
            ],
            "__typename": [
                1
            ]
        },
        "RepoArchivedAuditEntryVisibility": {},
        "RepoChangeMergeSettingAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "isEnabled": [
                4
            ],
            "mergeType": [
                1077
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoChangeMergeSettingAuditEntryMergeType": {},
        "RepoConfigDisableAnonymousGitAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigDisableCollaboratorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigDisableContributorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigDisableSockpuppetDisallowedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigEnableAnonymousGitAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigEnableCollaboratorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigEnableContributorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigEnableSockpuppetDisallowedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigLockAnonymousGitAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigUnlockAnonymousGitAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepoCreateAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "forkParentName": [
                1
            ],
            "forkSourceName": [
                1
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "visibility": [
                1089
            ],
            "__typename": [
                1
            ]
        },
        "RepoCreateAuditEntryVisibility": {},
        "RepoDestroyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "visibility": [
                1091
            ],
            "__typename": [
                1
            ]
        },
        "RepoDestroyAuditEntryVisibility": {},
        "RepoRemoveMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "visibility": [
                1093
            ],
            "__typename": [
                1
            ]
        },
        "RepoRemoveMemberAuditEntryVisibility": {},
        "RepoRemoveTopicAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "topic": [
                1378
            ],
            "topicName": [
                1
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "ReportedContentClassifiers": {},
        "Repository": {
            "allowUpdateBranch": [
                4
            ],
            "archivedAt": [
                301
            ],
            "assignableUsers": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "autoMergeAllowed": [
                4
            ],
            "branchProtectionRules": [
                97,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "codeOfConduct": [
                166
            ],
            "codeowners": [
                1099,
                {
                    "refName": [
                        1
                    ]
                }
            ],
            "collaborators": [
                1101,
                {
                    "affiliation": [
                        171
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "login": [
                        1
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "commitComments": [
                181,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "contactLinks": [
                1104
            ],
            "contributingGuidelines": [
                200
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "defaultBranchRef": [
                1009
            ],
            "deleteBranchOnMerge": [
                4
            ],
            "dependencyGraphManifests": [
                368,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "dependenciesAfter": [
                        1
                    ],
                    "dependenciesFirst": [
                        14
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "withDependencies": [
                        4
                    ]
                }
            ],
            "deployKeys": [
                371,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "deployments": [
                375,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "environments": [
                        1,
                        "[String!]"
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        378
                    ]
                }
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                563
            ],
            "discussion": [
                405,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "discussionCategories": [
                407,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterByAssignable": [
                        4
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "discussionCategory": [
                406,
                {
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "discussions": [
                413,
                {
                    "after": [
                        1
                    ],
                    "answered": [
                        4
                    ],
                    "before": [
                        1
                    ],
                    "categoryId": [
                        2
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        415
                    ],
                    "states": [
                        423,
                        "[DiscussionState!]"
                    ]
                }
            ],
            "diskUsage": [
                14
            ],
            "environment": [
                508,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "environments": [
                509,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "names": [
                        1,
                        "[String!]"
                    ],
                    "orderBy": [
                        513
                    ],
                    "pinnedEnvironmentFilter": [
                        512
                    ]
                }
            ],
            "forkCount": [
                14
            ],
            "forkingAllowed": [
                4
            ],
            "forks": [
                1103,
                {
                    "affiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "hasIssuesEnabled": [
                        4
                    ],
                    "isLocked": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131
                    ],
                    "ownerAffiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        1136
                    ],
                    "visibility": [
                        1160
                    ]
                }
            ],
            "fundingLinks": [
                534
            ],
            "hasDiscussionsEnabled": [
                4
            ],
            "hasIssuesEnabled": [
                4
            ],
            "hasProjectsEnabled": [
                4
            ],
            "hasSponsorshipsEnabled": [
                4
            ],
            "hasVulnerabilityAlertsEnabled": [
                4
            ],
            "hasWikiEnabled": [
                4
            ],
            "homepageUrl": [
                1389
            ],
            "id": [
                2
            ],
            "interactionAbility": [
                1112
            ],
            "isArchived": [
                4
            ],
            "isBlankIssuesEnabled": [
                4
            ],
            "isDisabled": [
                4
            ],
            "isEmpty": [
                4
            ],
            "isFork": [
                4
            ],
            "isInOrganization": [
                4
            ],
            "isLocked": [
                4
            ],
            "isMirror": [
                4
            ],
            "isPrivate": [
                4
            ],
            "isSecurityPolicyEnabled": [
                4
            ],
            "isTemplate": [
                4
            ],
            "isUserConfigurationRepository": [
                4
            ],
            "issue": [
                584,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "issueOrPullRequest": [
                595,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "issueTemplates": [
                600
            ],
            "issues": [
                591,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        594
                    ],
                    "first": [
                        14
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        598,
                        "[IssueState!]"
                    ]
                }
            ],
            "label": [
                609,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "labels": [
                610,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        612
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "languages": [
                617,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        619
                    ]
                }
            ],
            "latestRelease": [
                1026
            ],
            "licenseInfo": [
                621
            ],
            "lockReason": [
                1121
            ],
            "mentionableUsers": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "mergeCommitAllowed": [
                4
            ],
            "mergeCommitMessage": [
                669
            ],
            "mergeCommitTitle": [
                670
            ],
            "mergeQueue": [
                673,
                {
                    "branch": [
                        1
                    ]
                }
            ],
            "milestone": [
                687,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "milestones": [
                688,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        691
                    ],
                    "query": [
                        1
                    ],
                    "states": [
                        693,
                        "[MilestoneState!]"
                    ]
                }
            ],
            "mirrorUrl": [
                1389
            ],
            "name": [
                1
            ],
            "nameWithOwner": [
                1
            ],
            "object": [
                551,
                {
                    "expression": [
                        1
                    ],
                    "oid": [
                        552
                    ]
                }
            ],
            "openGraphImageUrl": [
                1389
            ],
            "owner": [
                1133
            ],
            "packages": [
                785,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "orderBy": [
                        792
                    ],
                    "packageType": [
                        797
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "parent": [
                1096
            ],
            "pinnedDiscussions": [
                817,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "pinnedEnvironments": [
                822,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        824
                    ]
                }
            ],
            "pinnedIssues": [
                828,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "planFeatures": [
                1135
            ],
            "primaryLanguage": [
                616
            ],
            "project": [
                835,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projectV2": [
                856,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                848,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        850
                    ],
                    "search": [
                        1
                    ],
                    "states": [
                        854,
                        "[ProjectState!]"
                    ]
                }
            ],
            "projectsResourcePath": [
                1389
            ],
            "projectsUrl": [
                1389
            ],
            "projectsV2": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "minPermissionLevel": [
                        906
                    ],
                    "orderBy": [
                        903
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "pullRequest": [
                944,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "pullRequestTemplates": [
                978
            ],
            "pullRequests": [
                953,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        977,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "pushedAt": [
                301
            ],
            "rebaseMergeAllowed": [
                4
            ],
            "recentProjects": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "ref": [
                1009,
                {
                    "qualifiedName": [
                        1,
                        "String!"
                    ]
                }
            ],
            "refs": [
                1010,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "direction": [
                        712
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1014
                    ],
                    "query": [
                        1
                    ],
                    "refPrefix": [
                        1,
                        "String!"
                    ]
                }
            ],
            "release": [
                1026,
                {
                    "tagName": [
                        1,
                        "String!"
                    ]
                }
            ],
            "releases": [
                1030,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1032
                    ]
                }
            ],
            "repositoryTopics": [
                1158,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "resourcePath": [
                1389
            ],
            "ruleset": [
                1148,
                {
                    "databaseId": [
                        14,
                        "Int!"
                    ],
                    "includeParents": [
                        4
                    ]
                }
            ],
            "rulesets": [
                1154,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includeParents": [
                        4
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "securityPolicyUrl": [
                1389
            ],
            "shortDescriptionHTML": [
                563,
                {
                    "limit": [
                        14
                    ]
                }
            ],
            "squashMergeAllowed": [
                4
            ],
            "squashMergeCommitMessage": [
                1301
            ],
            "squashMergeCommitTitle": [
                1302
            ],
            "squashPrTitleUsedAsDefault": [
                4
            ],
            "sshUrl": [
                554
            ],
            "stargazerCount": [
                14
            ],
            "stargazers": [
                1306,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1304
                    ]
                }
            ],
            "submodules": [
                1329,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "tempCloneToken": [
                1
            ],
            "templateRepository": [
                1096
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "usesCustomOpenGraphImage": [
                4
            ],
            "viewerCanAdminister": [
                4
            ],
            "viewerCanCreateProjects": [
                4
            ],
            "viewerCanSubscribe": [
                4
            ],
            "viewerCanUpdateTopics": [
                4
            ],
            "viewerDefaultCommitEmail": [
                1
            ],
            "viewerDefaultMergeMethod": [
                956
            ],
            "viewerHasStarred": [
                4
            ],
            "viewerPermission": [
                1134
            ],
            "viewerPossibleCommitEmails": [
                1
            ],
            "viewerSubscription": [
                1334
            ],
            "visibility": [
                1160
            ],
            "vulnerabilityAlert": [
                1163,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "vulnerabilityAlerts": [
                1164,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "dependencyScopes": [
                        1165,
                        "[RepositoryVulnerabilityAlertDependencyScope!]"
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "states": [
                        1167,
                        "[RepositoryVulnerabilityAlertState!]"
                    ]
                }
            ],
            "watchers": [
                1557,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "webCommitSignoffRequired": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryAffiliation": {},
        "RepositoryAuditEntryData": {
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "on_OrgRestoreMemberMembershipRepositoryAuditEntryData": [
                747
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                831
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                832
            ],
            "on_RepoAccessAuditEntry": [
                1069
            ],
            "on_RepoAddMemberAuditEntry": [
                1071
            ],
            "on_RepoAddTopicAuditEntry": [
                1073
            ],
            "on_RepoArchivedAuditEntry": [
                1074
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                1076
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                1078
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                1079
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                1080
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                1081
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                1082
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                1083
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                1084
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                1085
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                1086
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                1087
            ],
            "on_RepoCreateAuditEntry": [
                1088
            ],
            "on_RepoDestroyAuditEntry": [
                1090
            ],
            "on_RepoRemoveMemberAuditEntry": [
                1092
            ],
            "on_RepoRemoveTopicAuditEntry": [
                1094
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1341
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1367
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryCodeowners": {
            "errors": [
                1100
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryCodeownersError": {
            "column": [
                14
            ],
            "kind": [
                1
            ],
            "line": [
                14
            ],
            "message": [
                1
            ],
            "path": [
                1
            ],
            "source": [
                1
            ],
            "suggestion": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryCollaboratorConnection": {
            "edges": [
                1102
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryCollaboratorEdge": {
            "cursor": [
                1
            ],
            "node": [
                1554
            ],
            "permission": [
                1134
            ],
            "permissionSources": [
                807
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryConnection": {
            "edges": [
                1108
            ],
            "nodes": [
                1096
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "totalDiskUsage": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryContactLink": {
            "about": [
                1
            ],
            "name": [
                1
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryContributionType": {},
        "RepositoryDiscussionAuthor": {
            "repositoryDiscussions": [
                413,
                {
                    "after": [
                        1
                    ],
                    "answered": [
                        4
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        415
                    ],
                    "repositoryId": [
                        2
                    ],
                    "states": [
                        423,
                        "[DiscussionState!]"
                    ]
                }
            ],
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryDiscussionCommentAuthor": {
            "repositoryDiscussionComments": [
                411,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "onlyAnswers": [
                        4
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryIdConditionTarget": {
            "repositoryIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryIdConditionTargetInput": {
            "repositoryIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInfo": {
            "archivedAt": [
                301
            ],
            "createdAt": [
                301
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                563
            ],
            "forkCount": [
                14
            ],
            "hasDiscussionsEnabled": [
                4
            ],
            "hasIssuesEnabled": [
                4
            ],
            "hasProjectsEnabled": [
                4
            ],
            "hasSponsorshipsEnabled": [
                4
            ],
            "hasWikiEnabled": [
                4
            ],
            "homepageUrl": [
                1389
            ],
            "isArchived": [
                4
            ],
            "isFork": [
                4
            ],
            "isInOrganization": [
                4
            ],
            "isLocked": [
                4
            ],
            "isMirror": [
                4
            ],
            "isPrivate": [
                4
            ],
            "isTemplate": [
                4
            ],
            "licenseInfo": [
                621
            ],
            "lockReason": [
                1121
            ],
            "mirrorUrl": [
                1389
            ],
            "name": [
                1
            ],
            "nameWithOwner": [
                1
            ],
            "openGraphImageUrl": [
                1389
            ],
            "owner": [
                1133
            ],
            "pushedAt": [
                301
            ],
            "resourcePath": [
                1389
            ],
            "shortDescriptionHTML": [
                563,
                {
                    "limit": [
                        14
                    ]
                }
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "usesCustomOpenGraphImage": [
                4
            ],
            "visibility": [
                1160
            ],
            "on_Repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInteractionAbility": {
            "expiresAt": [
                301
            ],
            "limit": [
                1113
            ],
            "origin": [
                1115
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInteractionLimit": {},
        "RepositoryInteractionLimitExpiry": {},
        "RepositoryInteractionLimitOrigin": {},
        "RepositoryInvitation": {
            "email": [
                1
            ],
            "id": [
                2
            ],
            "invitee": [
                1554
            ],
            "inviter": [
                1554
            ],
            "permalink": [
                1389
            ],
            "permission": [
                1134
            ],
            "repository": [
                1111
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInvitationConnection": {
            "edges": [
                1118
            ],
            "nodes": [
                1116
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInvitationEdge": {
            "cursor": [
                1
            ],
            "node": [
                1116
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInvitationOrder": {
            "direction": [
                712
            ],
            "field": [
                1120
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInvitationOrderField": {},
        "RepositoryLockReason": {},
        "RepositoryMigration": {
            "continueOnError": [
                4
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                1
            ],
            "failureReason": [
                1
            ],
            "id": [
                2
            ],
            "migrationLogUrl": [
                1389
            ],
            "migrationSource": [
                684
            ],
            "repositoryName": [
                1
            ],
            "sourceUrl": [
                1389
            ],
            "state": [
                686
            ],
            "warningsCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryMigrationConnection": {
            "edges": [
                1124
            ],
            "nodes": [
                1122
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryMigrationEdge": {
            "cursor": [
                1
            ],
            "node": [
                1122
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryMigrationOrder": {
            "direction": [
                1126
            ],
            "field": [
                1127
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryMigrationOrderDirection": {},
        "RepositoryMigrationOrderField": {},
        "RepositoryNameConditionTarget": {
            "exclude": [
                1
            ],
            "include": [
                1
            ],
            "protected": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryNameConditionTargetInput": {
            "exclude": [
                1
            ],
            "include": [
                1
            ],
            "protected": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryNode": {
            "repository": [
                1096
            ],
            "on_CommitComment": [
                180
            ],
            "on_CommitCommentThread": [
                183
            ],
            "on_DependabotUpdate": [
                361
            ],
            "on_Discussion": [
                405
            ],
            "on_DiscussionCategory": [
                406
            ],
            "on_Issue": [
                584
            ],
            "on_IssueComment": [
                586
            ],
            "on_PinnedDiscussion": [
                816
            ],
            "on_PullRequest": [
                944
            ],
            "on_PullRequestCommitCommentThread": [
                950
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewComment": [
                962
            ],
            "on_RepositoryVulnerabilityAlert": [
                1163
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryOrder": {
            "direction": [
                712
            ],
            "field": [
                1132
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryOrderField": {},
        "RepositoryOwner": {
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "id": [
                2
            ],
            "login": [
                1
            ],
            "repositories": [
                1103,
                {
                    "affiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "hasIssuesEnabled": [
                        4
                    ],
                    "isArchived": [
                        4
                    ],
                    "isFork": [
                        4
                    ],
                    "isLocked": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131
                    ],
                    "ownerAffiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        1136
                    ],
                    "visibility": [
                        1160
                    ]
                }
            ],
            "repository": [
                1096,
                {
                    "followRenames": [
                        4
                    ],
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryPermission": {},
        "RepositoryPlanFeatures": {
            "codeowners": [
                4
            ],
            "draftPullRequests": [
                4
            ],
            "maximumAssignees": [
                14
            ],
            "maximumManualReviewRequests": [
                14
            ],
            "teamReviewRequests": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryPrivacy": {},
        "RepositoryPropertyConditionTarget": {
            "exclude": [
                937
            ],
            "include": [
                937
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryPropertyConditionTargetInput": {
            "exclude": [
                938
            ],
            "include": [
                938
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRule": {
            "id": [
                2
            ],
            "parameters": [
                1207
            ],
            "repositoryRuleset": [
                1148
            ],
            "type": [
                1147
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRuleConditions": {
            "refName": [
                1012
            ],
            "repositoryId": [
                1109
            ],
            "repositoryName": [
                1128
            ],
            "repositoryProperty": [
                1137
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRuleConditionsInput": {
            "refName": [
                1013
            ],
            "repositoryId": [
                1110
            ],
            "repositoryName": [
                1129
            ],
            "repositoryProperty": [
                1138
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRuleConnection": {
            "edges": [
                1143
            ],
            "nodes": [
                1139
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRuleEdge": {
            "cursor": [
                1
            ],
            "node": [
                1139
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRuleInput": {
            "id": [
                2
            ],
            "parameters": [
                1208
            ],
            "type": [
                1147
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRuleOrder": {
            "direction": [
                712
            ],
            "field": [
                1146
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRuleOrderField": {},
        "RepositoryRuleType": {},
        "RepositoryRuleset": {
            "bypassActors": [
                1151,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "conditions": [
                1140
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "enforcement": [
                1206
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "rules": [
                1142,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "type": [
                        1147
                    ]
                }
            ],
            "source": [
                1209
            ],
            "target": [
                1156
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRulesetBypassActor": {
            "actor": [
                100
            ],
            "bypassMode": [
                1150
            ],
            "deployKey": [
                4
            ],
            "id": [
                2
            ],
            "organizationAdmin": [
                4
            ],
            "repositoryRoleDatabaseId": [
                14
            ],
            "repositoryRoleName": [
                1
            ],
            "repositoryRuleset": [
                1148
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRulesetBypassActorBypassMode": {},
        "RepositoryRulesetBypassActorConnection": {
            "edges": [
                1152
            ],
            "nodes": [
                1149
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRulesetBypassActorEdge": {
            "cursor": [
                1
            ],
            "node": [
                1149
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRulesetBypassActorInput": {
            "actorId": [
                2
            ],
            "bypassMode": [
                1150
            ],
            "deployKey": [
                4
            ],
            "organizationAdmin": [
                4
            ],
            "repositoryRoleDatabaseId": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRulesetConnection": {
            "edges": [
                1155
            ],
            "nodes": [
                1148
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRulesetEdge": {
            "cursor": [
                1
            ],
            "node": [
                1148
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryRulesetTarget": {},
        "RepositoryTopic": {
            "id": [
                2
            ],
            "resourcePath": [
                1389
            ],
            "topic": [
                1378
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryTopicConnection": {
            "edges": [
                1159
            ],
            "nodes": [
                1157
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryTopicEdge": {
            "cursor": [
                1
            ],
            "node": [
                1157
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVisibility": {},
        "RepositoryVisibilityChangeDisableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "enterpriseResourcePath": [
                1389
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                1389
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVisibilityChangeEnableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "enterpriseResourcePath": [
                1389
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                1389
            ],
            "id": [
                2
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVulnerabilityAlert": {
            "autoDismissedAt": [
                301
            ],
            "createdAt": [
                301
            ],
            "dependabotUpdate": [
                361
            ],
            "dependencyScope": [
                1165
            ],
            "dismissComment": [
                1
            ],
            "dismissReason": [
                1
            ],
            "dismissedAt": [
                301
            ],
            "dismisser": [
                1554
            ],
            "fixedAt": [
                301
            ],
            "id": [
                2
            ],
            "number": [
                14
            ],
            "repository": [
                1096
            ],
            "securityAdvisory": [
                1221
            ],
            "securityVulnerability": [
                1235
            ],
            "state": [
                1167
            ],
            "vulnerableManifestFilename": [
                1
            ],
            "vulnerableManifestPath": [
                1
            ],
            "vulnerableRequirements": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVulnerabilityAlertConnection": {
            "edges": [
                1166
            ],
            "nodes": [
                1163
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVulnerabilityAlertDependencyScope": {},
        "RepositoryVulnerabilityAlertEdge": {
            "cursor": [
                1
            ],
            "node": [
                1163
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVulnerabilityAlertState": {},
        "RequestReviewsInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "teamIds": [
                2
            ],
            "union": [
                4
            ],
            "userIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RequestReviewsPayload": {
            "actor": [
                13
            ],
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "requestedReviewersEdge": [
                1561
            ],
            "__typename": [
                1
            ]
        },
        "RequestableCheckStatusState": {},
        "RequestedReviewer": {
            "on_Bot": [
                89
            ],
            "on_Mannequin": [
                637
            ],
            "on_Team": [
                1339
            ],
            "on_User": [
                1554
            ],
            "on_Actor": [
                13
            ],
            "on_Node": [
                704
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Subscribable": [
                1331
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "__typename": [
                1
            ]
        },
        "RequestedReviewerConnection": {
            "edges": [
                1173
            ],
            "nodes": [
                1171
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RequestedReviewerEdge": {
            "cursor": [
                1
            ],
            "node": [
                1171
            ],
            "__typename": [
                1
            ]
        },
        "RequirableByPullRequest": {
            "isRequired": [
                4,
                {
                    "pullRequestId": [
                        2
                    ],
                    "pullRequestNumber": [
                        14
                    ]
                }
            ],
            "on_CheckRun": [
                129
            ],
            "on_StatusContext": [
                1322
            ],
            "__typename": [
                1
            ]
        },
        "RequiredDeploymentsParameters": {
            "requiredDeploymentEnvironments": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RequiredDeploymentsParametersInput": {
            "requiredDeploymentEnvironments": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RequiredStatusCheckDescription": {
            "app": [
                58
            ],
            "context": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RequiredStatusCheckInput": {
            "appId": [
                2
            ],
            "context": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RequiredStatusChecksParameters": {
            "requiredStatusChecks": [
                1316
            ],
            "strictRequiredStatusChecksPolicy": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RequiredStatusChecksParametersInput": {
            "requiredStatusChecks": [
                1317
            ],
            "strictRequiredStatusChecksPolicy": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RerequestCheckSuiteInput": {
            "checkSuiteId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RerequestCheckSuitePayload": {
            "checkSuite": [
                143
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ResolveReviewThreadInput": {
            "clientMutationId": [
                1
            ],
            "threadId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ResolveReviewThreadPayload": {
            "clientMutationId": [
                1
            ],
            "thread": [
                972
            ],
            "__typename": [
                1
            ]
        },
        "RestrictedContribution": {
            "isRestricted": [
                4
            ],
            "occurredAt": [
                301
            ],
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "RetireSponsorsTierInput": {
            "clientMutationId": [
                1
            ],
            "tierId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RetireSponsorsTierPayload": {
            "clientMutationId": [
                1
            ],
            "sponsorsTier": [
                1283
            ],
            "__typename": [
                1
            ]
        },
        "RevertPullRequestInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "draft": [
                4
            ],
            "pullRequestId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RevertPullRequestPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "revertPullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissalAllowance": {
            "actor": [
                1191
            ],
            "branchProtectionRule": [
                93
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissalAllowanceActor": {
            "on_App": [
                58
            ],
            "on_Team": [
                1339
            ],
            "on_User": [
                1554
            ],
            "on_Node": [
                704
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Subscribable": [
                1331
            ],
            "on_Actor": [
                13
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissalAllowanceConnection": {
            "edges": [
                1193
            ],
            "nodes": [
                1190
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissalAllowanceEdge": {
            "cursor": [
                1
            ],
            "node": [
                1190
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "dismissalMessage": [
                1
            ],
            "dismissalMessageHTML": [
                1
            ],
            "id": [
                2
            ],
            "previousReviewState": [
                971
            ],
            "pullRequest": [
                944
            ],
            "pullRequestCommit": [
                949
            ],
            "resourcePath": [
                1389
            ],
            "review": [
                961
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequest": {
            "asCodeOwner": [
                4
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "requestedReviewer": [
                1171
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequestConnection": {
            "edges": [
                1197
            ],
            "nodes": [
                1195
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequestEdge": {
            "cursor": [
                1
            ],
            "node": [
                1195
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequestRemovedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "requestedReviewer": [
                1171
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequestedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "pullRequest": [
                944
            ],
            "requestedReviewer": [
                1171
            ],
            "__typename": [
                1
            ]
        },
        "ReviewStatusHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "reviewDecision": [
                968
            ],
            "__typename": [
                1
            ]
        },
        "RevokeEnterpriseOrganizationsMigratorRoleInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RevokeEnterpriseOrganizationsMigratorRolePayload": {
            "clientMutationId": [
                1
            ],
            "organizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "RevokeMigratorRoleInput": {
            "actor": [
                1
            ],
            "actorType": [
                16
            ],
            "clientMutationId": [
                1
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RevokeMigratorRolePayload": {
            "clientMutationId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RoleInOrganization": {},
        "RuleEnforcement": {},
        "RuleParameters": {
            "on_BranchNamePatternParameters": [
                91
            ],
            "on_CodeScanningParameters": [
                167
            ],
            "on_CommitAuthorEmailPatternParameters": [
                178
            ],
            "on_CommitMessagePatternParameters": [
                191
            ],
            "on_CommitterEmailPatternParameters": [
                194
            ],
            "on_FileExtensionRestrictionParameters": [
                523
            ],
            "on_FilePathRestrictionParameters": [
                525
            ],
            "on_MaxFilePathLengthParameters": [
                657
            ],
            "on_MaxFileSizeParameters": [
                659
            ],
            "on_PullRequestParameters": [
                959
            ],
            "on_RequiredDeploymentsParameters": [
                1175
            ],
            "on_RequiredStatusChecksParameters": [
                1179
            ],
            "on_TagNamePatternParameters": [
                1337
            ],
            "on_UpdateParameters": [
                1496
            ],
            "on_WorkflowsParameters": [
                1595
            ],
            "__typename": [
                1
            ]
        },
        "RuleParametersInput": {
            "branchNamePattern": [
                92
            ],
            "codeScanning": [
                168
            ],
            "commitAuthorEmailPattern": [
                179
            ],
            "commitMessagePattern": [
                192
            ],
            "committerEmailPattern": [
                195
            ],
            "fileExtensionRestriction": [
                524
            ],
            "filePathRestriction": [
                526
            ],
            "maxFilePathLength": [
                658
            ],
            "maxFileSize": [
                660
            ],
            "pullRequest": [
                960
            ],
            "requiredDeployments": [
                1176
            ],
            "requiredStatusChecks": [
                1180
            ],
            "tagNamePattern": [
                1338
            ],
            "update": [
                1497
            ],
            "workflows": [
                1596
            ],
            "__typename": [
                1
            ]
        },
        "RuleSource": {
            "on_Organization": [
                757
            ],
            "on_Repository": [
                1096
            ],
            "on_Actor": [
                13
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Node": [
                704
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_RepositoryInfo": [
                1111
            ],
            "on_Starrable": [
                1308
            ],
            "on_Subscribable": [
                1331
            ],
            "__typename": [
                1
            ]
        },
        "SamlDigestAlgorithm": {},
        "SamlSignatureAlgorithm": {},
        "SavedReply": {
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "title": [
                1
            ],
            "user": [
                13
            ],
            "__typename": [
                1
            ]
        },
        "SavedReplyConnection": {
            "edges": [
                1214
            ],
            "nodes": [
                1212
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SavedReplyEdge": {
            "cursor": [
                1
            ],
            "node": [
                1212
            ],
            "__typename": [
                1
            ]
        },
        "SavedReplyOrder": {
            "direction": [
                712
            ],
            "field": [
                1216
            ],
            "__typename": [
                1
            ]
        },
        "SavedReplyOrderField": {},
        "SearchResultItem": {
            "on_App": [
                58
            ],
            "on_Discussion": [
                405
            ],
            "on_Issue": [
                584
            ],
            "on_MarketplaceListing": [
                654
            ],
            "on_Organization": [
                757
            ],
            "on_PullRequest": [
                944
            ],
            "on_Repository": [
                1096
            ],
            "on_User": [
                1554
            ],
            "on_Node": [
                704
            ],
            "on_Closable": [
                157
            ],
            "on_Comment": [
                172
            ],
            "on_Deletable": [
                305
            ],
            "on_Labelable": [
                614
            ],
            "on_Lockable": [
                635
            ],
            "on_Reactable": [
                995
            ],
            "on_RepositoryNode": [
                1130
            ],
            "on_Subscribable": [
                1331
            ],
            "on_Updatable": [
                1430
            ],
            "on_Votable": [
                1584
            ],
            "on_Assignable": [
                67
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_SubscribableThread": [
                1332
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_UpdatableComment": [
                1431
            ],
            "on_Actor": [
                13
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_RepositoryInfo": [
                1111
            ],
            "on_Starrable": [
                1308
            ],
            "__typename": [
                1
            ]
        },
        "SearchResultItemConnection": {
            "codeCount": [
                14
            ],
            "discussionCount": [
                14
            ],
            "edges": [
                1219
            ],
            "issueCount": [
                14
            ],
            "nodes": [
                1217
            ],
            "pageInfo": [
                804
            ],
            "repositoryCount": [
                14
            ],
            "userCount": [
                14
            ],
            "wikiCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SearchResultItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                1217
            ],
            "textMatches": [
                1374
            ],
            "__typename": [
                1
            ]
        },
        "SearchType": {},
        "SecurityAdvisory": {
            "classification": [
                1222
            ],
            "cvss": [
                107
            ],
            "cwes": [
                110,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "databaseId": [
                14
            ],
            "description": [
                1
            ],
            "ghsaId": [
                1
            ],
            "id": [
                2
            ],
            "identifiers": [
                1226
            ],
            "notificationsPermalink": [
                1389
            ],
            "origin": [
                1
            ],
            "permalink": [
                1389
            ],
            "publishedAt": [
                301
            ],
            "references": [
                1233
            ],
            "severity": [
                1234
            ],
            "summary": [
                1
            ],
            "updatedAt": [
                301
            ],
            "vulnerabilities": [
                1236,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "classifications": [
                        1222,
                        "[SecurityAdvisoryClassification!]"
                    ],
                    "ecosystem": [
                        1224
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1238
                    ],
                    "package": [
                        1
                    ],
                    "severities": [
                        1234,
                        "[SecurityAdvisorySeverity!]"
                    ]
                }
            ],
            "withdrawnAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryClassification": {},
        "SecurityAdvisoryConnection": {
            "edges": [
                1225
            ],
            "nodes": [
                1221
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryEcosystem": {},
        "SecurityAdvisoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                1221
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryIdentifier": {
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryIdentifierFilter": {
            "type": [
                1228
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryIdentifierType": {},
        "SecurityAdvisoryOrder": {
            "direction": [
                712
            ],
            "field": [
                1230
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryOrderField": {},
        "SecurityAdvisoryPackage": {
            "ecosystem": [
                1224
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryPackageVersion": {
            "identifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryReference": {
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisorySeverity": {},
        "SecurityVulnerability": {
            "advisory": [
                1221
            ],
            "firstPatchedVersion": [
                1232
            ],
            "package": [
                1231
            ],
            "severity": [
                1234
            ],
            "updatedAt": [
                301
            ],
            "vulnerableVersionRange": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityVulnerabilityConnection": {
            "edges": [
                1237
            ],
            "nodes": [
                1235
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SecurityVulnerabilityEdge": {
            "cursor": [
                1
            ],
            "node": [
                1235
            ],
            "__typename": [
                1
            ]
        },
        "SecurityVulnerabilityOrder": {
            "direction": [
                712
            ],
            "field": [
                1239
            ],
            "__typename": [
                1
            ]
        },
        "SecurityVulnerabilityOrderField": {},
        "SetEnterpriseIdentityProviderInput": {
            "clientMutationId": [
                1
            ],
            "digestMethod": [
                1210
            ],
            "enterpriseId": [
                2
            ],
            "idpCertificate": [
                1
            ],
            "issuer": [
                1
            ],
            "signatureMethod": [
                1211
            ],
            "ssoUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "SetEnterpriseIdentityProviderPayload": {
            "clientMutationId": [
                1
            ],
            "identityProvider": [
                456
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationInteractionLimitInput": {
            "clientMutationId": [
                1
            ],
            "expiry": [
                1114
            ],
            "limit": [
                1113
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationInteractionLimitPayload": {
            "clientMutationId": [
                1
            ],
            "organization": [
                757
            ],
            "__typename": [
                1
            ]
        },
        "SetRepositoryInteractionLimitInput": {
            "clientMutationId": [
                1
            ],
            "expiry": [
                1114
            ],
            "limit": [
                1113
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "SetRepositoryInteractionLimitPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "SetUserInteractionLimitInput": {
            "clientMutationId": [
                1
            ],
            "expiry": [
                1114
            ],
            "limit": [
                1113
            ],
            "userId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "SetUserInteractionLimitPayload": {
            "clientMutationId": [
                1
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "SmimeSignature": {
            "email": [
                1
            ],
            "isValid": [
                4
            ],
            "payload": [
                1
            ],
            "signature": [
                1
            ],
            "signer": [
                1554
            ],
            "state": [
                556
            ],
            "wasSignedByGitHub": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SocialAccount": {
            "displayName": [
                1
            ],
            "provider": [
                1252
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "SocialAccountConnection": {
            "edges": [
                1251
            ],
            "nodes": [
                1249
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SocialAccountEdge": {
            "cursor": [
                1
            ],
            "node": [
                1249
            ],
            "__typename": [
                1
            ]
        },
        "SocialAccountProvider": {},
        "Sponsor": {
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "on_Actor": [
                13
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Node": [
                704
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "SponsorAndLifetimeValue": {
            "amountInCents": [
                14
            ],
            "formattedAmount": [
                1
            ],
            "sponsor": [
                1263
            ],
            "sponsorable": [
                1263
            ],
            "__typename": [
                1
            ]
        },
        "SponsorAndLifetimeValueConnection": {
            "edges": [
                1256
            ],
            "nodes": [
                1254
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SponsorAndLifetimeValueEdge": {
            "cursor": [
                1
            ],
            "node": [
                1254
            ],
            "__typename": [
                1
            ]
        },
        "SponsorAndLifetimeValueOrder": {
            "direction": [
                712
            ],
            "field": [
                1258
            ],
            "__typename": [
                1
            ]
        },
        "SponsorAndLifetimeValueOrderField": {},
        "SponsorConnection": {
            "edges": [
                1260
            ],
            "nodes": [
                1253
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SponsorEdge": {
            "cursor": [
                1
            ],
            "node": [
                1253
            ],
            "__typename": [
                1
            ]
        },
        "SponsorOrder": {
            "direction": [
                712
            ],
            "field": [
                1262
            ],
            "__typename": [
                1
            ]
        },
        "SponsorOrderField": {},
        "Sponsorable": {
            "estimatedNextSponsorsPayoutInCents": [
                14
            ],
            "hasSponsorsListing": [
                4
            ],
            "isSponsoredBy": [
                4,
                {
                    "accountLogin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "isSponsoringViewer": [
                4
            ],
            "lifetimeReceivedSponsorshipValues": [
                1255,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1257
                    ]
                }
            ],
            "monthlyEstimatedSponsorsIncomeInCents": [
                14
            ],
            "sponsoring": [
                1259,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1261
                    ]
                }
            ],
            "sponsors": [
                1259,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1261
                    ],
                    "tierId": [
                        2
                    ]
                }
            ],
            "sponsorsActivities": [
                1271,
                {
                    "actions": [
                        1270,
                        "[SponsorsActivityAction!]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includeAsSponsor": [
                        4
                    ],
                    "includePrivate": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1273
                    ],
                    "period": [
                        1275
                    ],
                    "since": [
                        301
                    ],
                    "until": [
                        301
                    ]
                }
            ],
            "sponsorsListing": [
                1279
            ],
            "sponsorshipForViewerAsSponsor": [
                1289,
                {
                    "activeOnly": [
                        4
                    ]
                }
            ],
            "sponsorshipForViewerAsSponsorable": [
                1289,
                {
                    "activeOnly": [
                        4
                    ]
                }
            ],
            "sponsorshipNewsletters": [
                1293,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1295
                    ]
                }
            ],
            "sponsorshipsAsMaintainer": [
                1290,
                {
                    "activeOnly": [
                        4
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includePrivate": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1297
                    ]
                }
            ],
            "sponsorshipsAsSponsor": [
                1290,
                {
                    "activeOnly": [
                        4
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "maintainerLogins": [
                        1,
                        "[String!]"
                    ],
                    "orderBy": [
                        1297
                    ]
                }
            ],
            "totalSponsorshipAmountAsSponsorInCents": [
                14,
                {
                    "since": [
                        301
                    ],
                    "sponsorableLogins": [
                        1,
                        "[String!]"
                    ],
                    "until": [
                        301
                    ]
                }
            ],
            "viewerCanSponsor": [
                4
            ],
            "viewerIsSponsoring": [
                4
            ],
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "SponsorableItem": {
            "on_Organization": [
                757
            ],
            "on_User": [
                1554
            ],
            "on_Actor": [
                13
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_Node": [
                704
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "SponsorableItemConnection": {
            "edges": [
                1266
            ],
            "nodes": [
                1264
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SponsorableItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                1264
            ],
            "__typename": [
                1
            ]
        },
        "SponsorableOrder": {
            "direction": [
                712
            ],
            "field": [
                1268
            ],
            "__typename": [
                1
            ]
        },
        "SponsorableOrderField": {},
        "SponsorsActivity": {
            "action": [
                1270
            ],
            "currentPrivacyLevel": [
                1300
            ],
            "id": [
                2
            ],
            "paymentSource": [
                1299
            ],
            "previousSponsorsTier": [
                1283
            ],
            "sponsor": [
                1253
            ],
            "sponsorable": [
                1263
            ],
            "sponsorsTier": [
                1283
            ],
            "timestamp": [
                301
            ],
            "viaBulkSponsorship": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsActivityAction": {},
        "SponsorsActivityConnection": {
            "edges": [
                1272
            ],
            "nodes": [
                1269
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsActivityEdge": {
            "cursor": [
                1
            ],
            "node": [
                1269
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsActivityOrder": {
            "direction": [
                712
            ],
            "field": [
                1274
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsActivityOrderField": {},
        "SponsorsActivityPeriod": {},
        "SponsorsCountryOrRegionCode": {},
        "SponsorsGoal": {
            "description": [
                1
            ],
            "kind": [
                1278
            ],
            "percentComplete": [
                14
            ],
            "targetValue": [
                14
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsGoalKind": {},
        "SponsorsListing": {
            "activeGoal": [
                1277
            ],
            "activeStripeConnectAccount": [
                1325
            ],
            "billingCountryOrRegion": [
                1
            ],
            "contactEmailAddress": [
                1
            ],
            "createdAt": [
                301
            ],
            "dashboardResourcePath": [
                1389
            ],
            "dashboardUrl": [
                1389
            ],
            "featuredItems": [
                1281,
                {
                    "featureableTypes": [
                        1282,
                        "[SponsorsListingFeaturedItemFeatureableType!]"
                    ]
                }
            ],
            "fiscalHost": [
                757
            ],
            "fullDescription": [
                1
            ],
            "fullDescriptionHTML": [
                563
            ],
            "id": [
                2
            ],
            "isPublic": [
                4
            ],
            "name": [
                1
            ],
            "nextPayoutDate": [
                300
            ],
            "residenceCountryOrRegion": [
                1
            ],
            "resourcePath": [
                1389
            ],
            "shortDescription": [
                1
            ],
            "slug": [
                1
            ],
            "sponsorable": [
                1263
            ],
            "tiers": [
                1285,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includeUnpublished": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1287
                    ]
                }
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsListingFeatureableItem": {
            "on_Repository": [
                1096
            ],
            "on_User": [
                1554
            ],
            "on_Node": [
                704
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryInfo": [
                1111
            ],
            "on_Starrable": [
                1308
            ],
            "on_Subscribable": [
                1331
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "on_Actor": [
                13
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsListingFeaturedItem": {
            "createdAt": [
                301
            ],
            "description": [
                1
            ],
            "featureable": [
                1280
            ],
            "id": [
                2
            ],
            "position": [
                14
            ],
            "sponsorsListing": [
                1279
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsListingFeaturedItemFeatureableType": {},
        "SponsorsTier": {
            "adminInfo": [
                1284
            ],
            "closestLesserValueTier": [
                1283
            ],
            "createdAt": [
                301
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                563
            ],
            "id": [
                2
            ],
            "isCustomAmount": [
                4
            ],
            "isOneTime": [
                4
            ],
            "monthlyPriceInCents": [
                14
            ],
            "monthlyPriceInDollars": [
                14
            ],
            "name": [
                1
            ],
            "sponsorsListing": [
                1279
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierAdminInfo": {
            "isDraft": [
                4
            ],
            "isPublished": [
                4
            ],
            "isRetired": [
                4
            ],
            "sponsorships": [
                1290,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includePrivate": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1297
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierConnection": {
            "edges": [
                1286
            ],
            "nodes": [
                1283
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierEdge": {
            "cursor": [
                1
            ],
            "node": [
                1283
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierOrder": {
            "direction": [
                712
            ],
            "field": [
                1288
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierOrderField": {},
        "Sponsorship": {
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "isActive": [
                4
            ],
            "isOneTimePayment": [
                4
            ],
            "isSponsorOptedIntoEmail": [
                4
            ],
            "maintainer": [
                1554
            ],
            "paymentSource": [
                1299
            ],
            "privacyLevel": [
                1300
            ],
            "sponsor": [
                1554
            ],
            "sponsorEntity": [
                1253
            ],
            "sponsorable": [
                1263
            ],
            "tier": [
                1283
            ],
            "tierSelectedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipConnection": {
            "edges": [
                1291
            ],
            "nodes": [
                1289
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "totalRecurringMonthlyPriceInCents": [
                14
            ],
            "totalRecurringMonthlyPriceInDollars": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipEdge": {
            "cursor": [
                1
            ],
            "node": [
                1289
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipNewsletter": {
            "author": [
                1554
            ],
            "body": [
                1
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "isPublished": [
                4
            ],
            "sponsorable": [
                1263
            ],
            "subject": [
                1
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipNewsletterConnection": {
            "edges": [
                1294
            ],
            "nodes": [
                1292
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipNewsletterEdge": {
            "cursor": [
                1
            ],
            "node": [
                1292
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipNewsletterOrder": {
            "direction": [
                712
            ],
            "field": [
                1296
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipNewsletterOrderField": {},
        "SponsorshipOrder": {
            "direction": [
                712
            ],
            "field": [
                1298
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipOrderField": {},
        "SponsorshipPaymentSource": {},
        "SponsorshipPrivacy": {},
        "SquashMergeCommitMessage": {},
        "SquashMergeCommitTitle": {},
        "SshSignature": {
            "email": [
                1
            ],
            "isValid": [
                4
            ],
            "keyFingerprint": [
                1
            ],
            "payload": [
                1
            ],
            "signature": [
                1
            ],
            "signer": [
                1554
            ],
            "state": [
                556
            ],
            "wasSignedByGitHub": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "StarOrder": {
            "direction": [
                712
            ],
            "field": [
                1305
            ],
            "__typename": [
                1
            ]
        },
        "StarOrderField": {},
        "StargazerConnection": {
            "edges": [
                1307
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "StargazerEdge": {
            "cursor": [
                1
            ],
            "node": [
                1554
            ],
            "starredAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "Starrable": {
            "id": [
                2
            ],
            "stargazerCount": [
                14
            ],
            "stargazers": [
                1306,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1304
                    ]
                }
            ],
            "viewerHasStarred": [
                4
            ],
            "on_Gist": [
                537
            ],
            "on_Repository": [
                1096
            ],
            "on_Topic": [
                1378
            ],
            "__typename": [
                1
            ]
        },
        "StarredRepositoryConnection": {
            "edges": [
                1310
            ],
            "isOverLimit": [
                4
            ],
            "nodes": [
                1096
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "StarredRepositoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                1096
            ],
            "starredAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "StartOrganizationMigrationInput": {
            "clientMutationId": [
                1
            ],
            "sourceAccessToken": [
                1
            ],
            "sourceOrgUrl": [
                1389
            ],
            "targetEnterpriseId": [
                2
            ],
            "targetOrgName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "StartOrganizationMigrationPayload": {
            "clientMutationId": [
                1
            ],
            "orgMigration": [
                777
            ],
            "__typename": [
                1
            ]
        },
        "StartRepositoryMigrationInput": {
            "accessToken": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "continueOnError": [
                4
            ],
            "gitArchiveUrl": [
                1
            ],
            "githubPat": [
                1
            ],
            "lockSource": [
                4
            ],
            "metadataArchiveUrl": [
                1
            ],
            "ownerId": [
                2
            ],
            "repositoryName": [
                1
            ],
            "skipReleases": [
                4
            ],
            "sourceId": [
                2
            ],
            "sourceRepositoryUrl": [
                1389
            ],
            "targetRepoVisibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "StartRepositoryMigrationPayload": {
            "clientMutationId": [
                1
            ],
            "repositoryMigration": [
                1122
            ],
            "__typename": [
                1
            ]
        },
        "Status": {
            "combinedContexts": [
                1320,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "commit": [
                176
            ],
            "context": [
                1322,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "contexts": [
                1322
            ],
            "id": [
                2
            ],
            "state": [
                1324
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckConfiguration": {
            "context": [
                1
            ],
            "integrationId": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckConfigurationInput": {
            "context": [
                1
            ],
            "integrationId": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckRollup": {
            "commit": [
                176
            ],
            "contexts": [
                1320,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "id": [
                2
            ],
            "state": [
                1324
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckRollupContext": {
            "on_CheckRun": [
                129
            ],
            "on_StatusContext": [
                1322
            ],
            "on_Node": [
                704
            ],
            "on_RequirableByPullRequest": [
                1174
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckRollupContextConnection": {
            "checkRunCount": [
                14
            ],
            "checkRunCountsByState": [
                137
            ],
            "edges": [
                1321
            ],
            "nodes": [
                1319
            ],
            "pageInfo": [
                804
            ],
            "statusContextCount": [
                14
            ],
            "statusContextCountsByState": [
                1323
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckRollupContextEdge": {
            "cursor": [
                1
            ],
            "node": [
                1319
            ],
            "__typename": [
                1
            ]
        },
        "StatusContext": {
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "commit": [
                176
            ],
            "context": [
                1
            ],
            "createdAt": [
                301
            ],
            "creator": [
                13
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "isRequired": [
                4,
                {
                    "pullRequestId": [
                        2
                    ],
                    "pullRequestNumber": [
                        14
                    ]
                }
            ],
            "state": [
                1324
            ],
            "targetUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "StatusContextStateCount": {
            "count": [
                14
            ],
            "state": [
                1324
            ],
            "__typename": [
                1
            ]
        },
        "StatusState": {},
        "StripeConnectAccount": {
            "accountId": [
                1
            ],
            "billingCountryOrRegion": [
                1
            ],
            "countryOrRegion": [
                1
            ],
            "isActive": [
                4
            ],
            "sponsorsListing": [
                1279
            ],
            "stripeDashboardUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "SubmitPullRequestReviewInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "event": [
                970
            ],
            "pullRequestId": [
                2
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "SubmitPullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                961
            ],
            "__typename": [
                1
            ]
        },
        "Submodule": {
            "branch": [
                1
            ],
            "gitUrl": [
                1389
            ],
            "name": [
                1
            ],
            "nameRaw": [
                81
            ],
            "path": [
                1
            ],
            "pathRaw": [
                81
            ],
            "subprojectCommitOid": [
                552
            ],
            "__typename": [
                1
            ]
        },
        "SubmoduleConnection": {
            "edges": [
                1330
            ],
            "nodes": [
                1328
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SubmoduleEdge": {
            "cursor": [
                1
            ],
            "node": [
                1328
            ],
            "__typename": [
                1
            ]
        },
        "Subscribable": {
            "id": [
                2
            ],
            "viewerCanSubscribe": [
                4
            ],
            "viewerSubscription": [
                1334
            ],
            "on_Commit": [
                176
            ],
            "on_Discussion": [
                405
            ],
            "on_Issue": [
                584
            ],
            "on_PullRequest": [
                944
            ],
            "on_Repository": [
                1096
            ],
            "on_Team": [
                1339
            ],
            "on_TeamDiscussion": [
                1345
            ],
            "__typename": [
                1
            ]
        },
        "SubscribableThread": {
            "id": [
                2
            ],
            "viewerThreadSubscriptionFormAction": [
                1376
            ],
            "viewerThreadSubscriptionStatus": [
                1377
            ],
            "on_Issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "SubscribedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "subscribable": [
                1331
            ],
            "__typename": [
                1
            ]
        },
        "SubscriptionState": {},
        "SuggestedReviewer": {
            "isAuthor": [
                4
            ],
            "isCommenter": [
                4
            ],
            "reviewer": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "Tag": {
            "abbreviatedOid": [
                1
            ],
            "commitResourcePath": [
                1389
            ],
            "commitUrl": [
                1389
            ],
            "id": [
                2
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "oid": [
                552
            ],
            "repository": [
                1096
            ],
            "tagger": [
                547
            ],
            "target": [
                551
            ],
            "__typename": [
                1
            ]
        },
        "TagNamePatternParameters": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TagNamePatternParametersInput": {
            "name": [
                1
            ],
            "negate": [
                4
            ],
            "operator": [
                1
            ],
            "pattern": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Team": {
            "ancestors": [
                1344,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "childTeams": [
                1344,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "immediateOnly": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1363
                    ],
                    "userLogins": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "combinedSlug": [
                1
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "description": [
                1
            ],
            "discussion": [
                1345,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "discussions": [
                1351,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "isPinned": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1353
                    ]
                }
            ],
            "discussionsResourcePath": [
                1389
            ],
            "discussionsUrl": [
                1389
            ],
            "editTeamResourcePath": [
                1389
            ],
            "editTeamUrl": [
                1389
            ],
            "id": [
                2
            ],
            "invitations": [
                768,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "memberStatuses": [
                1571,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1573
                    ]
                }
            ],
            "members": [
                1356,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "membership": [
                        1361
                    ],
                    "orderBy": [
                        1358
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        1360
                    ]
                }
            ],
            "membersResourcePath": [
                1389
            ],
            "membersUrl": [
                1389
            ],
            "name": [
                1
            ],
            "newTeamResourcePath": [
                1389
            ],
            "newTeamUrl": [
                1389
            ],
            "notificationSetting": [
                1362
            ],
            "organization": [
                757
            ],
            "parentTeam": [
                1339
            ],
            "privacy": [
                1365
            ],
            "projectV2": [
                856,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projectsV2": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        875
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "minPermissionLevel": [
                        906
                    ],
                    "orderBy": [
                        903
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "repositories": [
                1368,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1370
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "repositoriesResourcePath": [
                1389
            ],
            "repositoriesUrl": [
                1389
            ],
            "resourcePath": [
                1389
            ],
            "reviewRequestDelegationAlgorithm": [
                1372
            ],
            "reviewRequestDelegationEnabled": [
                4
            ],
            "reviewRequestDelegationMemberCount": [
                14
            ],
            "reviewRequestDelegationNotifyTeam": [
                4
            ],
            "slug": [
                1
            ],
            "teamsResourcePath": [
                1389
            ],
            "teamsUrl": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "viewerCanAdminister": [
                4
            ],
            "viewerCanSubscribe": [
                4
            ],
            "viewerSubscription": [
                1334
            ],
            "__typename": [
                1
            ]
        },
        "TeamAddMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                4
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "team": [
                1339
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                1389
            ],
            "teamUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "TeamAddRepositoryAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                4
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "team": [
                1339
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                1389
            ],
            "teamUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "TeamAuditEntryData": {
            "team": [
                1339
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                1389
            ],
            "teamUrl": [
                1389
            ],
            "on_OrgRestoreMemberMembershipTeamAuditEntryData": [
                748
            ],
            "on_TeamAddMemberAuditEntry": [
                1340
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1341
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1343
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1366
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1367
            ],
            "__typename": [
                1
            ]
        },
        "TeamChangeParentTeamAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                4
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "parentTeam": [
                1339
            ],
            "parentTeamName": [
                1
            ],
            "parentTeamNameWas": [
                1
            ],
            "parentTeamResourcePath": [
                1389
            ],
            "parentTeamUrl": [
                1389
            ],
            "parentTeamWas": [
                1339
            ],
            "parentTeamWasResourcePath": [
                1389
            ],
            "parentTeamWasUrl": [
                1389
            ],
            "team": [
                1339
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                1389
            ],
            "teamUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "TeamConnection": {
            "edges": [
                1355
            ],
            "nodes": [
                1339
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussion": {
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "bodyVersion": [
                1
            ],
            "comments": [
                1347,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "fromComment": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1349
                    ]
                }
            ],
            "commentsResourcePath": [
                1389
            ],
            "commentsUrl": [
                1389
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "editor": [
                13
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "isPinned": [
                4
            ],
            "isPrivate": [
                4
            ],
            "lastEditedAt": [
                301
            ],
            "number": [
                14
            ],
            "publishedAt": [
                301
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "resourcePath": [
                1389
            ],
            "team": [
                1339
            ],
            "title": [
                1
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanPin": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanSubscribe": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "viewerSubscription": [
                1334
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionComment": {
            "author": [
                13
            ],
            "authorAssociation": [
                173
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                563
            ],
            "bodyText": [
                1
            ],
            "bodyVersion": [
                1
            ],
            "createdAt": [
                301
            ],
            "createdViaEmail": [
                4
            ],
            "databaseId": [
                14
            ],
            "discussion": [
                1345
            ],
            "editor": [
                13
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                4
            ],
            "lastEditedAt": [
                301
            ],
            "number": [
                14
            ],
            "publishedAt": [
                301
            ],
            "reactionGroups": [
                1002
            ],
            "reactions": [
                999,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        1000
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1003
                    ]
                }
            ],
            "resourcePath": [
                1389
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "userContentEdits": [
                1559,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "viewerCanDelete": [
                4
            ],
            "viewerCanReact": [
                4
            ],
            "viewerCanUpdate": [
                4
            ],
            "viewerCannotUpdateReasons": [
                174
            ],
            "viewerDidAuthor": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionCommentConnection": {
            "edges": [
                1348
            ],
            "nodes": [
                1346
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                1346
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionCommentOrder": {
            "direction": [
                712
            ],
            "field": [
                1350
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionCommentOrderField": {},
        "TeamDiscussionConnection": {
            "edges": [
                1352
            ],
            "nodes": [
                1345
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionEdge": {
            "cursor": [
                1
            ],
            "node": [
                1345
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionOrder": {
            "direction": [
                712
            ],
            "field": [
                1354
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionOrderField": {},
        "TeamEdge": {
            "cursor": [
                1
            ],
            "node": [
                1339
            ],
            "__typename": [
                1
            ]
        },
        "TeamMemberConnection": {
            "edges": [
                1357
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "TeamMemberEdge": {
            "cursor": [
                1
            ],
            "memberAccessResourcePath": [
                1389
            ],
            "memberAccessUrl": [
                1389
            ],
            "node": [
                1554
            ],
            "role": [
                1360
            ],
            "__typename": [
                1
            ]
        },
        "TeamMemberOrder": {
            "direction": [
                712
            ],
            "field": [
                1359
            ],
            "__typename": [
                1
            ]
        },
        "TeamMemberOrderField": {},
        "TeamMemberRole": {},
        "TeamMembershipType": {},
        "TeamNotificationSetting": {},
        "TeamOrder": {
            "direction": [
                712
            ],
            "field": [
                1364
            ],
            "__typename": [
                1
            ]
        },
        "TeamOrderField": {},
        "TeamPrivacy": {},
        "TeamRemoveMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                4
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "team": [
                1339
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                1389
            ],
            "teamUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "TeamRemoveRepositoryAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                71
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                15
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                1389
            ],
            "actorUrl": [
                1389
            ],
            "createdAt": [
                830
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                4
            ],
            "operationType": [
                711
            ],
            "organization": [
                757
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                1389
            ],
            "organizationUrl": [
                1389
            ],
            "repository": [
                1096
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                1389
            ],
            "repositoryUrl": [
                1389
            ],
            "team": [
                1339
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                1389
            ],
            "teamUrl": [
                1389
            ],
            "user": [
                1554
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                1389
            ],
            "userUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "TeamRepositoryConnection": {
            "edges": [
                1369
            ],
            "nodes": [
                1096
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "TeamRepositoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                1096
            ],
            "permission": [
                1134
            ],
            "__typename": [
                1
            ]
        },
        "TeamRepositoryOrder": {
            "direction": [
                712
            ],
            "field": [
                1371
            ],
            "__typename": [
                1
            ]
        },
        "TeamRepositoryOrderField": {},
        "TeamReviewAssignmentAlgorithm": {},
        "TeamRole": {},
        "TextMatch": {
            "fragment": [
                1
            ],
            "highlights": [
                1375
            ],
            "property": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TextMatchHighlight": {
            "beginIndice": [
                14
            ],
            "endIndice": [
                14
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ThreadSubscriptionFormAction": {},
        "ThreadSubscriptionState": {},
        "Topic": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "relatedTopics": [
                1378,
                {
                    "first": [
                        14
                    ]
                }
            ],
            "repositories": [
                1103,
                {
                    "affiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "hasIssuesEnabled": [
                        4
                    ],
                    "isLocked": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131
                    ],
                    "ownerAffiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        1136
                    ],
                    "sponsorableOnly": [
                        4
                    ],
                    "visibility": [
                        1160
                    ]
                }
            ],
            "stargazerCount": [
                14
            ],
            "stargazers": [
                1306,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1304
                    ]
                }
            ],
            "viewerHasStarred": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "TopicAuditEntryData": {
            "topic": [
                1378
            ],
            "topicName": [
                1
            ],
            "on_RepoAddTopicAuditEntry": [
                1073
            ],
            "on_RepoRemoveTopicAuditEntry": [
                1094
            ],
            "__typename": [
                1
            ]
        },
        "TopicSuggestionDeclineReason": {},
        "TrackedIssueStates": {},
        "TransferEnterpriseOrganizationInput": {
            "clientMutationId": [
                1
            ],
            "destinationEnterpriseId": [
                2
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "TransferEnterpriseOrganizationPayload": {
            "clientMutationId": [
                1
            ],
            "organization": [
                757
            ],
            "__typename": [
                1
            ]
        },
        "TransferIssueInput": {
            "clientMutationId": [
                1
            ],
            "createLabelsIfMissing": [
                4
            ],
            "issueId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "TransferIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "TransferredEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "fromRepository": [
                1096
            ],
            "id": [
                2
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "Tree": {
            "abbreviatedOid": [
                1
            ],
            "commitResourcePath": [
                1389
            ],
            "commitUrl": [
                1389
            ],
            "entries": [
                1388
            ],
            "id": [
                2
            ],
            "oid": [
                552
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "TreeEntry": {
            "extension": [
                1
            ],
            "isGenerated": [
                4
            ],
            "language": [
                616
            ],
            "lineCount": [
                14
            ],
            "mode": [
                14
            ],
            "name": [
                1
            ],
            "nameRaw": [
                81
            ],
            "object": [
                551
            ],
            "oid": [
                552
            ],
            "path": [
                1
            ],
            "pathRaw": [
                81
            ],
            "repository": [
                1096
            ],
            "size": [
                14
            ],
            "submodule": [
                1328
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "URI": {},
        "UnarchiveProjectV2ItemInput": {
            "clientMutationId": [
                1
            ],
            "itemId": [
                2
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnarchiveProjectV2ItemPayload": {
            "clientMutationId": [
                1
            ],
            "item": [
                876
            ],
            "__typename": [
                1
            ]
        },
        "UnarchiveRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnarchiveRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "UnassignedEvent": {
            "actor": [
                13
            ],
            "assignable": [
                67
            ],
            "assignee": [
                69
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "UnfollowOrganizationInput": {
            "clientMutationId": [
                1
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnfollowOrganizationPayload": {
            "clientMutationId": [
                1
            ],
            "organization": [
                757
            ],
            "__typename": [
                1
            ]
        },
        "UnfollowUserInput": {
            "clientMutationId": [
                1
            ],
            "userId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnfollowUserPayload": {
            "clientMutationId": [
                1
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "UniformResourceLocatable": {
            "resourcePath": [
                1389
            ],
            "url": [
                1389
            ],
            "on_Bot": [
                89
            ],
            "on_CheckRun": [
                129
            ],
            "on_ClosedEvent": [
                164
            ],
            "on_Commit": [
                176
            ],
            "on_ConvertToDraftEvent": [
                215
            ],
            "on_CrossReferencedEvent": [
                299
            ],
            "on_Gist": [
                537
            ],
            "on_Issue": [
                584
            ],
            "on_Mannequin": [
                637
            ],
            "on_MergedEvent": [
                682
            ],
            "on_Milestone": [
                687
            ],
            "on_Organization": [
                757
            ],
            "on_PullRequest": [
                944
            ],
            "on_PullRequestCommit": [
                949
            ],
            "on_ReadyForReviewEvent": [
                1008
            ],
            "on_Release": [
                1026
            ],
            "on_Repository": [
                1096
            ],
            "on_RepositoryTopic": [
                1157
            ],
            "on_ReviewDismissedEvent": [
                1194
            ],
            "on_TeamDiscussion": [
                1345
            ],
            "on_TeamDiscussionComment": [
                1346
            ],
            "on_User": [
                1554
            ],
            "on_Workflow": [
                1585
            ],
            "on_WorkflowRun": [
                1588
            ],
            "on_WorkflowRunFile": [
                1591
            ],
            "__typename": [
                1
            ]
        },
        "UnknownSignature": {
            "email": [
                1
            ],
            "isValid": [
                4
            ],
            "payload": [
                1
            ],
            "signature": [
                1
            ],
            "signer": [
                1554
            ],
            "state": [
                556
            ],
            "wasSignedByGitHub": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UnlabeledEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "label": [
                609
            ],
            "labelable": [
                614
            ],
            "__typename": [
                1
            ]
        },
        "UnlinkProjectV2FromRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnlinkProjectV2FromRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "UnlinkProjectV2FromTeamInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "teamId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnlinkProjectV2FromTeamPayload": {
            "clientMutationId": [
                1
            ],
            "team": [
                1339
            ],
            "__typename": [
                1
            ]
        },
        "UnlinkRepositoryFromProjectInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnlinkRepositoryFromProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                835
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "UnlockLockableInput": {
            "clientMutationId": [
                1
            ],
            "lockableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnlockLockablePayload": {
            "actor": [
                13
            ],
            "clientMutationId": [
                1
            ],
            "unlockedRecord": [
                635
            ],
            "__typename": [
                1
            ]
        },
        "UnlockedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "lockable": [
                635
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkDiscussionCommentAsAnswerInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkDiscussionCommentAsAnswerPayload": {
            "clientMutationId": [
                1
            ],
            "discussion": [
                405
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkFileAsViewedInput": {
            "clientMutationId": [
                1
            ],
            "path": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkFileAsViewedPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkIssueAsDuplicateInput": {
            "canonicalId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "duplicateId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkIssueAsDuplicatePayload": {
            "clientMutationId": [
                1
            ],
            "duplicate": [
                595
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkProjectV2AsTemplateInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkProjectV2AsTemplatePayload": {
            "clientMutationId": [
                1
            ],
            "projectV2": [
                856
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkedAsDuplicateEvent": {
            "actor": [
                13
            ],
            "canonical": [
                595
            ],
            "createdAt": [
                301
            ],
            "duplicate": [
                595
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UnminimizeCommentInput": {
            "clientMutationId": [
                1
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnminimizeCommentPayload": {
            "clientMutationId": [
                1
            ],
            "unminimizedComment": [
                695
            ],
            "__typename": [
                1
            ]
        },
        "UnpinIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnpinIssuePayload": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "UnpinnedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "UnresolveReviewThreadInput": {
            "clientMutationId": [
                1
            ],
            "threadId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnresolveReviewThreadPayload": {
            "clientMutationId": [
                1
            ],
            "thread": [
                972
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeFromNotificationsInput": {
            "clientMutationId": [
                1
            ],
            "ids": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeFromNotificationsPayload": {
            "clientMutationId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribedEvent": {
            "actor": [
                13
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "subscribable": [
                1331
            ],
            "__typename": [
                1
            ]
        },
        "Updatable": {
            "viewerCanUpdate": [
                4
            ],
            "on_CommitComment": [
                180
            ],
            "on_Discussion": [
                405
            ],
            "on_DiscussionComment": [
                410
            ],
            "on_GistComment": [
                538
            ],
            "on_Issue": [
                584
            ],
            "on_IssueComment": [
                586
            ],
            "on_Project": [
                835
            ],
            "on_ProjectV2": [
                856
            ],
            "on_PullRequest": [
                944
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewComment": [
                962
            ],
            "on_TeamDiscussion": [
                1345
            ],
            "on_TeamDiscussionComment": [
                1346
            ],
            "__typename": [
                1
            ]
        },
        "UpdatableComment": {
            "viewerCannotUpdateReasons": [
                174
            ],
            "on_CommitComment": [
                180
            ],
            "on_DiscussionComment": [
                410
            ],
            "on_GistComment": [
                538
            ],
            "on_Issue": [
                584
            ],
            "on_IssueComment": [
                586
            ],
            "on_PullRequest": [
                944
            ],
            "on_PullRequestReview": [
                961
            ],
            "on_PullRequestReviewComment": [
                962
            ],
            "on_TeamDiscussion": [
                1345
            ],
            "on_TeamDiscussionComment": [
                1346
            ],
            "__typename": [
                1
            ]
        },
        "UpdateBranchProtectionRuleInput": {
            "allowsDeletions": [
                4
            ],
            "allowsForcePushes": [
                4
            ],
            "blocksCreations": [
                4
            ],
            "branchProtectionRuleId": [
                2
            ],
            "bypassForcePushActorIds": [
                2
            ],
            "bypassPullRequestActorIds": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "dismissesStaleReviews": [
                4
            ],
            "isAdminEnforced": [
                4
            ],
            "lockAllowsFetchAndMerge": [
                4
            ],
            "lockBranch": [
                4
            ],
            "pattern": [
                1
            ],
            "pushActorIds": [
                2
            ],
            "requireLastPushApproval": [
                4
            ],
            "requiredApprovingReviewCount": [
                14
            ],
            "requiredDeploymentEnvironments": [
                1
            ],
            "requiredStatusCheckContexts": [
                1
            ],
            "requiredStatusChecks": [
                1178
            ],
            "requiresApprovingReviews": [
                4
            ],
            "requiresCodeOwnerReviews": [
                4
            ],
            "requiresCommitSignatures": [
                4
            ],
            "requiresConversationResolution": [
                4
            ],
            "requiresDeployments": [
                4
            ],
            "requiresLinearHistory": [
                4
            ],
            "requiresStatusChecks": [
                4
            ],
            "requiresStrictStatusChecks": [
                4
            ],
            "restrictsPushes": [
                4
            ],
            "restrictsReviewDismissals": [
                4
            ],
            "reviewDismissalActorIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateBranchProtectionRulePayload": {
            "branchProtectionRule": [
                93
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCheckRunInput": {
            "actions": [
                130
            ],
            "checkRunId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "completedAt": [
                301
            ],
            "conclusion": [
                128
            ],
            "detailsUrl": [
                1389
            ],
            "externalId": [
                1
            ],
            "name": [
                1
            ],
            "output": [
                134
            ],
            "repositoryId": [
                2
            ],
            "startedAt": [
                301
            ],
            "status": [
                1170
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCheckRunPayload": {
            "checkRun": [
                129
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCheckSuitePreferencesInput": {
            "autoTriggerPreferences": [
                144
            ],
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCheckSuitePreferencesPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "UpdateDiscussionCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "commentId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateDiscussionCommentPayload": {
            "clientMutationId": [
                1
            ],
            "comment": [
                410
            ],
            "__typename": [
                1
            ]
        },
        "UpdateDiscussionInput": {
            "body": [
                1
            ],
            "categoryId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "discussionId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "discussion": [
                405
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseAdministratorRoleInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "role": [
                445
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseAdministratorRolePayload": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "policyValue": [
                446
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseDefaultRepositoryPermissionSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                450
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseDefaultRepositoryPermissionSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanCreateRepositoriesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "membersCanCreateInternalRepositories": [
                4
            ],
            "membersCanCreatePrivateRepositories": [
                4
            ],
            "membersCanCreatePublicRepositories": [
                4
            ],
            "membersCanCreateRepositoriesPolicyEnabled": [
                4
            ],
            "settingValue": [
                467
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanDeleteIssuesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanDeleteIssuesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanMakePurchasesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                468
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanMakePurchasesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseOrganizationProjectsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseOrganizationProjectsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseOwnerOrganizationRoleInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "organizationId": [
                2
            ],
            "organizationRole": [
                1205
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseOwnerOrganizationRolePayload": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseProfileInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "location": [
                1
            ],
            "name": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseProfilePayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseRepositoryProjectsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseRepositoryProjectsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseTeamDiscussionsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                452
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseTeamDiscussionsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                437
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnvironmentInput": {
            "clientMutationId": [
                1
            ],
            "environmentId": [
                2
            ],
            "preventSelfReview": [
                4
            ],
            "reviewers": [
                2
            ],
            "waitTimer": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnvironmentPayload": {
            "clientMutationId": [
                1
            ],
            "environment": [
                508
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListEnabledSettingInput": {
            "clientMutationId": [
                1
            ],
            "ownerId": [
                2
            ],
            "settingValue": [
                576
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListEnabledSettingPayload": {
            "clientMutationId": [
                1
            ],
            "owner": [
                583
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListEntryInput": {
            "allowListValue": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "ipAllowListEntryId": [
                2
            ],
            "isActive": [
                4
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListEntryPayload": {
            "clientMutationId": [
                1
            ],
            "ipAllowListEntry": [
                577
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListForInstalledAppsEnabledSettingInput": {
            "clientMutationId": [
                1
            ],
            "ownerId": [
                2
            ],
            "settingValue": [
                582
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListForInstalledAppsEnabledSettingPayload": {
            "clientMutationId": [
                1
            ],
            "owner": [
                583
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIssueCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIssueCommentPayload": {
            "clientMutationId": [
                1
            ],
            "issueComment": [
                586
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIssueInput": {
            "assigneeIds": [
                2
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "labelIds": [
                2
            ],
            "milestoneId": [
                2
            ],
            "projectIds": [
                2
            ],
            "state": [
                598
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIssuePayload": {
            "actor": [
                13
            ],
            "clientMutationId": [
                1
            ],
            "issue": [
                584
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLabelInput": {
            "clientMutationId": [
                1
            ],
            "color": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLabelPayload": {
            "clientMutationId": [
                1
            ],
            "label": [
                609
            ],
            "__typename": [
                1
            ]
        },
        "UpdateNotificationRestrictionSettingInput": {
            "clientMutationId": [
                1
            ],
            "ownerId": [
                2
            ],
            "settingValue": [
                705
            ],
            "__typename": [
                1
            ]
        },
        "UpdateNotificationRestrictionSettingPayload": {
            "clientMutationId": [
                1
            ],
            "owner": [
                1580
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOrganizationAllowPrivateRepositoryForkingSettingInput": {
            "clientMutationId": [
                1
            ],
            "forkingEnabled": [
                4
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "organization": [
                757
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOrganizationWebCommitSignoffSettingInput": {
            "clientMutationId": [
                1
            ],
            "organizationId": [
                2
            ],
            "webCommitSignoffRequired": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOrganizationWebCommitSignoffSettingPayload": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "organization": [
                757
            ],
            "__typename": [
                1
            ]
        },
        "UpdateParameters": {
            "updateAllowsFetchAndMerge": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateParametersInput": {
            "updateAllowsFetchAndMerge": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePatreonSponsorabilityInput": {
            "clientMutationId": [
                1
            ],
            "enablePatreonSponsorships": [
                4
            ],
            "sponsorableLogin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePatreonSponsorabilityPayload": {
            "clientMutationId": [
                1
            ],
            "sponsorsListing": [
                1279
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectCardInput": {
            "clientMutationId": [
                1
            ],
            "isArchived": [
                4
            ],
            "note": [
                1
            ],
            "projectCardId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectCardPayload": {
            "clientMutationId": [
                1
            ],
            "projectCard": [
                836
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectColumnInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "projectColumnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectColumnPayload": {
            "clientMutationId": [
                1
            ],
            "projectColumn": [
                843
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "projectId": [
                2
            ],
            "public": [
                4
            ],
            "state": [
                854
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2CollaboratorsInput": {
            "clientMutationId": [
                1
            ],
            "collaborators": [
                860
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2CollaboratorsPayload": {
            "clientMutationId": [
                1
            ],
            "collaborators": [
                858,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2DraftIssueInput": {
            "assigneeIds": [
                2
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "draftIssueId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2DraftIssuePayload": {
            "clientMutationId": [
                1
            ],
            "draftIssue": [
                430
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2Input": {
            "clientMutationId": [
                1
            ],
            "closed": [
                4
            ],
            "projectId": [
                2
            ],
            "public": [
                4
            ],
            "readme": [
                1
            ],
            "shortDescription": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2ItemFieldValueInput": {
            "clientMutationId": [
                1
            ],
            "fieldId": [
                2
            ],
            "itemId": [
                2
            ],
            "projectId": [
                2
            ],
            "value": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2ItemFieldValuePayload": {
            "clientMutationId": [
                1
            ],
            "projectV2Item": [
                876
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2ItemPositionInput": {
            "afterId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "itemId": [
                2
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2ItemPositionPayload": {
            "clientMutationId": [
                1
            ],
            "items": [
                877,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2Payload": {
            "clientMutationId": [
                1
            ],
            "projectV2": [
                856
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2StatusUpdateInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "startDate": [
                300
            ],
            "status": [
                925
            ],
            "statusUpdateId": [
                2
            ],
            "targetDate": [
                300
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectV2StatusUpdatePayload": {
            "clientMutationId": [
                1
            ],
            "statusUpdate": [
                921
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestBranchInput": {
            "clientMutationId": [
                1
            ],
            "expectedHeadOid": [
                552
            ],
            "pullRequestId": [
                2
            ],
            "updateMethod": [
                945
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestBranchPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestInput": {
            "assigneeIds": [
                2
            ],
            "baseRefName": [
                1
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "labelIds": [
                2
            ],
            "maintainerCanModify": [
                4
            ],
            "milestoneId": [
                2
            ],
            "projectIds": [
                2
            ],
            "pullRequestId": [
                2
            ],
            "state": [
                987
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestPayload": {
            "actor": [
                13
            ],
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                944
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestReviewCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "pullRequestReviewCommentId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestReviewCommentPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReviewComment": [
                962
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestReviewInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                961
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRefInput": {
            "clientMutationId": [
                1
            ],
            "force": [
                4
            ],
            "oid": [
                552
            ],
            "refId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRefPayload": {
            "clientMutationId": [
                1
            ],
            "ref": [
                1009
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRefsInput": {
            "clientMutationId": [
                1
            ],
            "refUpdates": [
                1016
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRefsPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "hasDiscussionsEnabled": [
                4
            ],
            "hasIssuesEnabled": [
                4
            ],
            "hasProjectsEnabled": [
                4
            ],
            "hasSponsorshipsEnabled": [
                4
            ],
            "hasWikiEnabled": [
                4
            ],
            "homepageUrl": [
                1389
            ],
            "name": [
                1
            ],
            "repositoryId": [
                2
            ],
            "template": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRepositoryRulesetInput": {
            "bypassActors": [
                1153
            ],
            "clientMutationId": [
                1
            ],
            "conditions": [
                1141
            ],
            "enforcement": [
                1206
            ],
            "name": [
                1
            ],
            "repositoryRulesetId": [
                2
            ],
            "rules": [
                1144
            ],
            "target": [
                1156
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRepositoryRulesetPayload": {
            "clientMutationId": [
                1
            ],
            "ruleset": [
                1148
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRepositoryWebCommitSignoffSettingInput": {
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "webCommitSignoffRequired": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRepositoryWebCommitSignoffSettingPayload": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSponsorshipPreferencesInput": {
            "clientMutationId": [
                1
            ],
            "privacyLevel": [
                1300
            ],
            "receiveEmails": [
                4
            ],
            "sponsorId": [
                2
            ],
            "sponsorLogin": [
                1
            ],
            "sponsorableId": [
                2
            ],
            "sponsorableLogin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSponsorshipPreferencesPayload": {
            "clientMutationId": [
                1
            ],
            "sponsorship": [
                1289
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSubscriptionInput": {
            "clientMutationId": [
                1
            ],
            "state": [
                1334
            ],
            "subscribableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSubscriptionPayload": {
            "clientMutationId": [
                1
            ],
            "subscribable": [
                1331
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamDiscussionCommentInput": {
            "body": [
                1
            ],
            "bodyVersion": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamDiscussionCommentPayload": {
            "clientMutationId": [
                1
            ],
            "teamDiscussionComment": [
                1346
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamDiscussionInput": {
            "body": [
                1
            ],
            "bodyVersion": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "pinned": [
                4
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "teamDiscussion": [
                1345
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamReviewAssignmentInput": {
            "algorithm": [
                1372
            ],
            "clientMutationId": [
                1
            ],
            "countMembersAlreadyRequested": [
                4
            ],
            "enabled": [
                4
            ],
            "excludedTeamMemberIds": [
                2
            ],
            "id": [
                2
            ],
            "includeChildTeamMembers": [
                4
            ],
            "notifyTeam": [
                4
            ],
            "removeTeamRequest": [
                4
            ],
            "teamMemberCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamReviewAssignmentPayload": {
            "clientMutationId": [
                1
            ],
            "team": [
                1339
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamsRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "permission": [
                1134
            ],
            "repositoryId": [
                2
            ],
            "teamIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamsRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                1096
            ],
            "teams": [
                1339
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTopicsInput": {
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "topicNames": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTopicsPayload": {
            "clientMutationId": [
                1
            ],
            "invalidTopicNames": [
                1
            ],
            "repository": [
                1096
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUserListInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "isPrivate": [
                4
            ],
            "listId": [
                2
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUserListPayload": {
            "clientMutationId": [
                1
            ],
            "list": [
                1563
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUserListsForItemInput": {
            "clientMutationId": [
                1
            ],
            "itemId": [
                2
            ],
            "listIds": [
                2
            ],
            "suggestedListIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUserListsForItemPayload": {
            "clientMutationId": [
                1
            ],
            "item": [
                1566
            ],
            "lists": [
                1563
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "User": {
            "anyPinnableItems": [
                4,
                {
                    "type": [
                        815
                    ]
                }
            ],
            "avatarUrl": [
                1389,
                {
                    "size": [
                        14
                    ]
                }
            ],
            "bio": [
                1
            ],
            "bioHTML": [
                563
            ],
            "canReceiveOrganizationEmailsWhenNotificationsRestricted": [
                4,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "commitComments": [
                181,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "company": [
                1
            ],
            "companyHTML": [
                563
            ],
            "contributionsCollection": [
                208,
                {
                    "from": [
                        301
                    ],
                    "organizationID": [
                        2
                    ],
                    "to": [
                        301
                    ]
                }
            ],
            "copilotEndpoints": [
                218
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "email": [
                1
            ],
            "enterprises": [
                449,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "membershipType": [
                        469
                    ],
                    "orderBy": [
                        470
                    ]
                }
            ],
            "estimatedNextSponsorsPayoutInCents": [
                14
            ],
            "followers": [
                532,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "following": [
                533,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "gist": [
                537,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "gistComments": [
                539,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "gists": [
                541,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        544
                    ],
                    "privacy": [
                        546
                    ]
                }
            ],
            "hasSponsorsListing": [
                4
            ],
            "hovercard": [
                567,
                {
                    "primarySubjectId": [
                        2
                    ]
                }
            ],
            "id": [
                2
            ],
            "interactionAbility": [
                1112
            ],
            "isBountyHunter": [
                4
            ],
            "isCampusExpert": [
                4
            ],
            "isDeveloperProgramMember": [
                4
            ],
            "isEmployee": [
                4
            ],
            "isFollowingViewer": [
                4
            ],
            "isGitHubStar": [
                4
            ],
            "isHireable": [
                4
            ],
            "isSiteAdmin": [
                4
            ],
            "isSponsoredBy": [
                4,
                {
                    "accountLogin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "isSponsoringViewer": [
                4
            ],
            "isViewer": [
                4
            ],
            "issueComments": [
                587,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        589
                    ]
                }
            ],
            "issues": [
                591,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        594
                    ],
                    "first": [
                        14
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        598,
                        "[IssueState!]"
                    ]
                }
            ],
            "itemShowcase": [
                833
            ],
            "lifetimeReceivedSponsorshipValues": [
                1255,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1257
                    ]
                }
            ],
            "lists": [
                1564,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "location": [
                1
            ],
            "login": [
                1
            ],
            "monthlyEstimatedSponsorsIncomeInCents": [
                14
            ],
            "name": [
                1
            ],
            "organization": [
                757,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationVerifiedDomainEmails": [
                1,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizations": [
                762,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        780
                    ]
                }
            ],
            "packages": [
                785,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "orderBy": [
                        792
                    ],
                    "packageType": [
                        797
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "pinnableItems": [
                813,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "types": [
                        815,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItems": [
                813,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "types": [
                        815,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItemsRemaining": [
                14
            ],
            "project": [
                835,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projectV2": [
                856,
                {
                    "number": [
                        14,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                848,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        850
                    ],
                    "search": [
                        1
                    ],
                    "states": [
                        854,
                        "[ProjectState!]"
                    ]
                }
            ],
            "projectsResourcePath": [
                1389
            ],
            "projectsUrl": [
                1389
            ],
            "projectsV2": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "minPermissionLevel": [
                        906
                    ],
                    "orderBy": [
                        903
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "pronouns": [
                1
            ],
            "publicKeys": [
                940,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "pullRequests": [
                953,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        596
                    ],
                    "states": [
                        977,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "recentProjects": [
                861,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "repositories": [
                1103,
                {
                    "affiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "hasIssuesEnabled": [
                        4
                    ],
                    "isArchived": [
                        4
                    ],
                    "isFork": [
                        4
                    ],
                    "isLocked": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131
                    ],
                    "ownerAffiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        1136
                    ],
                    "visibility": [
                        1160
                    ]
                }
            ],
            "repositoriesContributedTo": [
                1103,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "contributionTypes": [
                        1105,
                        "[RepositoryContributionType]"
                    ],
                    "first": [
                        14
                    ],
                    "hasIssues": [
                        4
                    ],
                    "includeUserRepositories": [
                        4
                    ],
                    "isLocked": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131
                    ],
                    "privacy": [
                        1136
                    ]
                }
            ],
            "repository": [
                1096,
                {
                    "followRenames": [
                        4
                    ],
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "repositoryDiscussionComments": [
                411,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "onlyAnswers": [
                        4
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "repositoryDiscussions": [
                413,
                {
                    "after": [
                        1
                    ],
                    "answered": [
                        4
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        415
                    ],
                    "repositoryId": [
                        2
                    ],
                    "states": [
                        423,
                        "[DiscussionState!]"
                    ]
                }
            ],
            "resourcePath": [
                1389
            ],
            "savedReplies": [
                1213,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1215
                    ]
                }
            ],
            "socialAccounts": [
                1250,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "sponsoring": [
                1259,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1261
                    ]
                }
            ],
            "sponsors": [
                1259,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1261
                    ],
                    "tierId": [
                        2
                    ]
                }
            ],
            "sponsorsActivities": [
                1271,
                {
                    "actions": [
                        1270,
                        "[SponsorsActivityAction!]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includeAsSponsor": [
                        4
                    ],
                    "includePrivate": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1273
                    ],
                    "period": [
                        1275
                    ],
                    "since": [
                        301
                    ],
                    "until": [
                        301
                    ]
                }
            ],
            "sponsorsListing": [
                1279
            ],
            "sponsorshipForViewerAsSponsor": [
                1289,
                {
                    "activeOnly": [
                        4
                    ]
                }
            ],
            "sponsorshipForViewerAsSponsorable": [
                1289,
                {
                    "activeOnly": [
                        4
                    ]
                }
            ],
            "sponsorshipNewsletters": [
                1293,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1295
                    ]
                }
            ],
            "sponsorshipsAsMaintainer": [
                1290,
                {
                    "activeOnly": [
                        4
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "includePrivate": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1297
                    ]
                }
            ],
            "sponsorshipsAsSponsor": [
                1290,
                {
                    "activeOnly": [
                        4
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "maintainerLogins": [
                        1,
                        "[String!]"
                    ],
                    "orderBy": [
                        1297
                    ]
                }
            ],
            "starredRepositories": [
                1309,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1304
                    ],
                    "ownedByViewer": [
                        4
                    ]
                }
            ],
            "status": [
                1570
            ],
            "suggestedListNames": [
                1569
            ],
            "topRepositories": [
                1103,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131,
                        "RepositoryOrder!"
                    ],
                    "since": [
                        301
                    ]
                }
            ],
            "totalSponsorshipAmountAsSponsorInCents": [
                14,
                {
                    "since": [
                        301
                    ],
                    "sponsorableLogins": [
                        1,
                        "[String!]"
                    ],
                    "until": [
                        301
                    ]
                }
            ],
            "twitterUsername": [
                1
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "viewerCanChangePinnedItems": [
                4
            ],
            "viewerCanCreateProjects": [
                4
            ],
            "viewerCanFollow": [
                4
            ],
            "viewerCanSponsor": [
                4
            ],
            "viewerIsFollowing": [
                4
            ],
            "viewerIsSponsoring": [
                4
            ],
            "watching": [
                1103,
                {
                    "affiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "hasIssuesEnabled": [
                        4
                    ],
                    "isLocked": [
                        4
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1131
                    ],
                    "ownerAffiliations": [
                        1097,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        1136
                    ],
                    "visibility": [
                        1160
                    ]
                }
            ],
            "websiteUrl": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "UserBlockDuration": {},
        "UserBlockedEvent": {
            "actor": [
                13
            ],
            "blockDuration": [
                1555
            ],
            "createdAt": [
                301
            ],
            "id": [
                2
            ],
            "subject": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "UserConnection": {
            "edges": [
                1561
            ],
            "nodes": [
                1554
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UserContentEdit": {
            "createdAt": [
                301
            ],
            "deletedAt": [
                301
            ],
            "deletedBy": [
                13
            ],
            "diff": [
                1
            ],
            "editedAt": [
                301
            ],
            "editor": [
                13
            ],
            "id": [
                2
            ],
            "updatedAt": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "UserContentEditConnection": {
            "edges": [
                1560
            ],
            "nodes": [
                1558
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UserContentEditEdge": {
            "cursor": [
                1
            ],
            "node": [
                1558
            ],
            "__typename": [
                1
            ]
        },
        "UserEdge": {
            "cursor": [
                1
            ],
            "node": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "UserEmailMetadata": {
            "primary": [
                4
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UserList": {
            "createdAt": [
                301
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "isPrivate": [
                4
            ],
            "items": [
                1567,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "lastAddedAt": [
                301
            ],
            "name": [
                1
            ],
            "slug": [
                1
            ],
            "updatedAt": [
                301
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "UserListConnection": {
            "edges": [
                1565
            ],
            "nodes": [
                1563
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UserListEdge": {
            "cursor": [
                1
            ],
            "node": [
                1563
            ],
            "__typename": [
                1
            ]
        },
        "UserListItems": {
            "on_Repository": [
                1096
            ],
            "on_Node": [
                704
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryInfo": [
                1111
            ],
            "on_Starrable": [
                1308
            ],
            "on_Subscribable": [
                1331
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "UserListItemsConnection": {
            "edges": [
                1568
            ],
            "nodes": [
                1566
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UserListItemsEdge": {
            "cursor": [
                1
            ],
            "node": [
                1566
            ],
            "__typename": [
                1
            ]
        },
        "UserListSuggestion": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UserStatus": {
            "createdAt": [
                301
            ],
            "emoji": [
                1
            ],
            "emojiHTML": [
                563
            ],
            "expiresAt": [
                301
            ],
            "id": [
                2
            ],
            "indicatesLimitedAvailability": [
                4
            ],
            "message": [
                1
            ],
            "organization": [
                757
            ],
            "updatedAt": [
                301
            ],
            "user": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "UserStatusConnection": {
            "edges": [
                1572
            ],
            "nodes": [
                1570
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UserStatusEdge": {
            "cursor": [
                1
            ],
            "node": [
                1570
            ],
            "__typename": [
                1
            ]
        },
        "UserStatusOrder": {
            "direction": [
                712
            ],
            "field": [
                1574
            ],
            "__typename": [
                1
            ]
        },
        "UserStatusOrderField": {},
        "VerifiableDomain": {
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "dnsHostName": [
                1389
            ],
            "domain": [
                1389
            ],
            "hasFoundHostName": [
                4
            ],
            "hasFoundVerificationToken": [
                4
            ],
            "id": [
                2
            ],
            "isApproved": [
                4
            ],
            "isRequiredForPolicyEnforcement": [
                4
            ],
            "isVerified": [
                4
            ],
            "owner": [
                1580
            ],
            "punycodeEncodedDomain": [
                1389
            ],
            "tokenExpirationTime": [
                301
            ],
            "updatedAt": [
                301
            ],
            "verificationToken": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "VerifiableDomainConnection": {
            "edges": [
                1577
            ],
            "nodes": [
                1575
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "VerifiableDomainEdge": {
            "cursor": [
                1
            ],
            "node": [
                1575
            ],
            "__typename": [
                1
            ]
        },
        "VerifiableDomainOrder": {
            "direction": [
                712
            ],
            "field": [
                1579
            ],
            "__typename": [
                1
            ]
        },
        "VerifiableDomainOrderField": {},
        "VerifiableDomainOwner": {
            "on_Enterprise": [
                437
            ],
            "on_Organization": [
                757
            ],
            "on_AnnouncementBanner": [
                57
            ],
            "on_Node": [
                704
            ],
            "on_Actor": [
                13
            ],
            "on_MemberStatusable": [
                662
            ],
            "on_PackageOwner": [
                794
            ],
            "on_ProfileOwner": [
                834
            ],
            "on_ProjectOwner": [
                852
            ],
            "on_ProjectV2Owner": [
                905
            ],
            "on_ProjectV2Recent": [
                907
            ],
            "on_RepositoryDiscussionAuthor": [
                1106
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                1107
            ],
            "on_RepositoryOwner": [
                1133
            ],
            "on_Sponsorable": [
                1263
            ],
            "on_UniformResourceLocatable": [
                1399
            ],
            "__typename": [
                1
            ]
        },
        "VerifyVerifiableDomainInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "VerifyVerifiableDomainPayload": {
            "clientMutationId": [
                1
            ],
            "domain": [
                1575
            ],
            "__typename": [
                1
            ]
        },
        "ViewerHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "viewer": [
                1554
            ],
            "__typename": [
                1
            ]
        },
        "Votable": {
            "upvoteCount": [
                14
            ],
            "viewerCanUpvote": [
                4
            ],
            "viewerHasUpvoted": [
                4
            ],
            "on_Discussion": [
                405
            ],
            "on_DiscussionComment": [
                410
            ],
            "__typename": [
                1
            ]
        },
        "Workflow": {
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "resourcePath": [
                1389
            ],
            "runs": [
                1589,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ],
                    "orderBy": [
                        1592
                    ]
                }
            ],
            "state": [
                1594
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowFileReference": {
            "path": [
                1
            ],
            "ref": [
                1
            ],
            "repositoryId": [
                14
            ],
            "sha": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowFileReferenceInput": {
            "path": [
                1
            ],
            "ref": [
                1
            ],
            "repositoryId": [
                14
            ],
            "sha": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRun": {
            "checkSuite": [
                143
            ],
            "createdAt": [
                301
            ],
            "databaseId": [
                14
            ],
            "deploymentReviews": [
                388,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "event": [
                1
            ],
            "file": [
                1591
            ],
            "id": [
                2
            ],
            "pendingDeploymentRequests": [
                385,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        14
                    ],
                    "last": [
                        14
                    ]
                }
            ],
            "resourcePath": [
                1389
            ],
            "runNumber": [
                14
            ],
            "updatedAt": [
                301
            ],
            "url": [
                1389
            ],
            "workflow": [
                1585
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunConnection": {
            "edges": [
                1590
            ],
            "nodes": [
                1588
            ],
            "pageInfo": [
                804
            ],
            "totalCount": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunEdge": {
            "cursor": [
                1
            ],
            "node": [
                1588
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunFile": {
            "id": [
                2
            ],
            "path": [
                1
            ],
            "repositoryFileUrl": [
                1389
            ],
            "repositoryName": [
                1389
            ],
            "resourcePath": [
                1389
            ],
            "run": [
                1588
            ],
            "url": [
                1389
            ],
            "viewerCanPushRepository": [
                4
            ],
            "viewerCanReadRepository": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunOrder": {
            "direction": [
                712
            ],
            "field": [
                1593
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunOrderField": {},
        "WorkflowState": {},
        "WorkflowsParameters": {
            "workflows": [
                1586
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowsParametersInput": {
            "workflows": [
                1587
            ],
            "__typename": [
                1
            ]
        },
        "X509Certificate": {}
    }
}