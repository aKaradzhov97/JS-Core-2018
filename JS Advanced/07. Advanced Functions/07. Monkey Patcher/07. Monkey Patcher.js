function patch(input) {
    switch (input) {
        case 'upvote':
            this.upVotes++;
            break;
        case 'downvote':
            this.downVotes++;
            break;
        case 'score':
            let currentUpVotes = this.upvotes;
            let currentDownVotes = this.downvotes;
            let rating = 'new';

            if (currentUpVotes + currentDownVotes >= 10) {
                if (currentUpVotes > 0.66 *(currentUpVotes + currentDownVotes)) {
                    rating = 'hot';
                } else if (currentDownVotes > currentUpVotes) {
                    rating = 'unpopular';
                } else if (currentUpVotes > 100 || currentDownVotes > 100) {
                    rating = 'controversial';
                }
            }
            if (currentUpVotes + currentDownVotes > 50) {
                let modifier = Math.ceil(0.25 * Math.max(currentDownVotes, currentUpVotes));
                currentUpVotes += modifier;
                currentDownVotes += modifier;
            }
            let score = currentUpVotes - currentDownVotes;
            return {currentUpVotes, currentDownVotes, score, rating};
    }
}