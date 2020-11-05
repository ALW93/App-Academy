class AngryBird:
    def __init__(self):
        self.x = 0
        self.y = 0

    def move_up_by(self, delta):
        self.y += delta


bird = AngryBird()
print(bird)
print(bird.y)
bird.move_up_by(5)
print(bird.y)
